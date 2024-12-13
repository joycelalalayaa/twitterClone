interface Props {
  initials: string;
}
export default function UserAvatar({ initials }: Props): JSX.Element {
  return (
    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
      {initials}
    </div>
  );
}
