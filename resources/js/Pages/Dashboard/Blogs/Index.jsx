import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link} from "@inertiajs/react";
import PrimaryLink from "@/Components/Links/PrimaryLink.jsx";

export default function Index({ auth, blogs }) {
  return (
    <AuthenticatedLayout user={auth.user}>
        <Head title="Blog" />

        <PrimaryLink href={route('dashboard.blogs.create')} >
            Create
        </PrimaryLink>

      <div className="grid grid-cols-4">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-gray-200 p-8 rounded-xl">
            {blog.title}
            <br />
            {blog.author.name}

            <br />
            <br />
            {blog.content}
          </div>
        ))}
      </div>
    </AuthenticatedLayout>
  );
}
