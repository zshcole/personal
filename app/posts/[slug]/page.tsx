import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

interface PostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map((filename) => ({
      slug: filename.replace(/\.mdx$/, ''),
    }));
}

export default async function PostPage({ params }: PostProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return <div>Post not found</div>;
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);
  
  // Using the RSC version of MDXRemote
  const { content: mdxContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: true },
  });

  return (
    <article className="prose mx-auto">
      <h1 className='text-black'>{data.title}</h1>
      <p className="text-sm text-black">{data.date}</p>
      <div className='text-black'>{mdxContent}</div>
    </article>
  );
}