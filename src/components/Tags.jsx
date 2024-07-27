import TagItem from "./TagItem";

export default function Tags() {
  return (
    <div className="w-[350px]">
      <h3 className="text-xl pb-3">Tags</h3>
      <ul className="flex gap-2 flex-wrap">
        <TagItem name="Node" />
        <TagItem name="Html" />
        <TagItem name="CSS" />
        <TagItem name="WebSocket" />
        <TagItem name="PHP" />
        <TagItem name="PDF" />
        <TagItem name="CRUD" />
      </ul>
    </div>
  );
}
