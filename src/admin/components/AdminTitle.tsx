interface AdminTitleProps {
  title: string;
  subtitle: string;
}

export const AdminTitle = ({ title, subtitle }: AdminTitleProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        {/* Welcome back, John! 👋 */}
        {title}
      </h1>
      <p className="text-gray-600">
        {/* Here's what's happening with your business today. */}
        {subtitle}
      </p>
    </div>
  );
};
