'use client';

import { useEffect, useState } from 'react';
import { FiEdit, FiTrash2, FiPlus, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { isSupabaseConfigured } from '@/lib/supabase';
import {
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
  type Project,
  type ProjectInput,
} from '@/lib/projects';

const emptyForm: ProjectInput = { title: '', description: '', image: '', link: '' };

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Project | null>(null);
  const [form, setForm] = useState<ProjectInput>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem('admin') === '1') setAuthed(true);
  }, []);

  useEffect(() => {
    if (!authed) return;
    fetchProjects()
      .then(setProjects)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [authed]);

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === process.env.NEXT_PUBLIC_ADMIN_PASSCODE) {
      sessionStorage.setItem('admin', '1');
      setAuthed(true);
    } else {
      setError('Wrong passcode');
    }
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      if (editing) {
        await updateProject(editing.id, form);
      } else {
        await createProject(form);
      }
      setProjects(await fetchProjects());
      setEditing(null);
      setForm(emptyForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  const remove = async (id: string) => {
    if (!confirm('Delete this project?')) return;
    try {
      await deleteProject(id);
      setProjects(projects.filter((p) => p.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed');
    }
  };

  if (!isSupabaseConfigured) {
    return <main className="p-10">Supabase not configured — copy .env.local.example to .env.local and fill in values.</main>;
  }

  if (!authed) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={login} className="bg-white p-8 rounded-2xl shadow w-full max-w-sm space-y-4">
          <h1 className="text-xl font-bold">Admin</h1>
          <input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            placeholder="Passcode"
            className="w-full border rounded-lg px-3 py-2"
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button className="w-full bg-yellow-600 text-white rounded-lg py-2 font-medium">Login</button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Projects Admin</h1>
          <Link href="/" className="text-yellow-600 font-medium">← Back to site</Link>
        </div>

        <form onSubmit={save} className="bg-white p-6 rounded-2xl shadow space-y-3">
          <h2 className="font-semibold">{editing ? 'Edit project' : 'New project'}</h2>
          <input required placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full border rounded-lg px-3 py-2" />
          <input placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full border rounded-lg px-3 py-2" />
          <input placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full border rounded-lg px-3 py-2" />
          <input placeholder="Link" value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} className="w-full border rounded-lg px-3 py-2" />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <div className="flex gap-2">
            <button disabled={saving} className="bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium disabled:opacity-50">
              {saving ? 'Saving...' : editing ? 'Update' : 'Create'}
            </button>
            {editing && (
              <button type="button" onClick={() => { setEditing(null); setForm(emptyForm); }} className="flex items-center gap-1 border px-4 py-2 rounded-lg">
                <FiX /> Cancel
              </button>
            )}
          </div>
        </form>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-3">
            {projects.map((p) => (
              <div key={p.id} className="bg-white p-4 rounded-2xl shadow flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-semibold truncate">{p.title}</p>
                  <p className="text-sm text-gray-500 truncate">{p.link}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => { setEditing(p); setForm({ title: p.title, description: p.description, image: p.image, link: p.link }); }} className="p-2 rounded-lg hover:bg-gray-100" aria-label="Edit">
                    <FiEdit />
                  </button>
                  <button onClick={() => remove(p.id)} className="p-2 rounded-lg text-red-600 hover:bg-red-50" aria-label="Delete">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
            {projects.length === 0 && <p className="text-gray-500">No projects yet.</p>}
          </div>
        )}
      </div>
    </main>
  );
}
