const TransactionsIcon = ({
  className = "w-10 h-10 text-purple-600 dark:text-purple-500",
}) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 2a8 8 0 00-8 8 8 8 0 0015.33 3H13v2a1 1 0 11-2 0v-3a1 1 0 011-1h4a1 1 0 011 1v.17A8 8 0 0010 2z"
      clipRule="evenodd"
    />
  </svg>
);

export default TransactionsIcon;
