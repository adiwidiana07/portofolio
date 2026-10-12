-- Run this in Supabase SQL Editor, then copy URL + anon key to .env.local

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null default '',
  image text not null default '',
  link text not null default '',
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;

-- WARNING: permissive policies = anyone with your anon key can CRUD.
-- Real security: add Supabase Auth, then restrict with auth.uid() checks.
create policy "public read" on public.projects for select using (true);
create policy "public insert" on public.projects for insert with check (true);
create policy "public update" on public.projects for update using (true);
create policy "public delete" on public.projects for delete using (true);

-- Seed: original 4 projects (run once, or add via /admin after setup)
insert into public.projects (title, description, image, link) values
  ('Web-Online Course', 'Online Course Website With Html Css Js.', '/project1.jpg', 'https://desain.digistik.id/allacademy/'),
  ('Time Keeper App', 'App time-keeper With Html Css Js.', '/project2.jpg', 'https://adiwidiana07.github.io/time-keeper/'),
  ('Football Coaching App', 'Platform Football Coaching With Html Css Js.', '/project3.jpg', 'https://desain.digistik.id/mfc/'),
  ('Computer lab loan', 'Platform Computer lab loan With Laravel.', '/Project4.png', 'https://github.com/adiwidiana07/labpplg-main');
