interface Props {
  value: string;
  setValue: (newValue: string) => void;
  editable: boolean;
}
export default function TextArea({
  value,
  setValue,
  editable,
}: Props): JSX.Element {
  if (editable) {
    return (
      <textarea
        className="w-full bg-gray-100 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={3}
        placeholder="What's happening?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  } else {
    return (
      <div className=" bg-gray-100 rounded-lg p-3 text-gray-700">{value}</div>
    );
  }
}
