const UsersIcon = ({
  className = "w-10 h-10 text-purple-600 dark:text-purple-500",
}) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 3a3 3 0 00-3 3v1H6a3 3 0 00-3 3v1h14v-1a3 3 0 00-3-3h-1V6a3 3 0 00-3-3zM5 12a2 2 0 00-2 2v1h14v-1a2 2 0 00-2-2H5z"
      clipRule="evenodd"
    />
  </svg>
);

export default UsersIcon;
