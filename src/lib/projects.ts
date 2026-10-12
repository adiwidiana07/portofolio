import { supabase } from './supabase';

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  created_at?: string;
};

export type ProjectInput = Pick<Project, 'title' | 'description' | 'image' | 'link'>;

export async function fetchProjects(): Promise<Project[]> {
  const { data, error } = await supabase!
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function createProject(input: ProjectInput): Promise<void> {
  const { error } = await supabase!.from('projects').insert(input);
  if (error) throw error;
}

export async function updateProject(id: string, input: ProjectInput): Promise<void> {
  const { error } = await supabase!.from('projects').update(input).eq('id', id);
  if (error) throw error;
}

export async function deleteProject(id: string): Promise<void> {
  const { error } = await supabase!.from('projects').delete().eq('id', id);
  if (error) throw error;
}
