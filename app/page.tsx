export default function Home() {
  return (
    <form>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="w-12">
            Code
          </label>
          <textarea
            name="title"
            id="title"
            className="border rounded p-2 w-full"
          />
        </div>
      </div>
    </form>
  );
}
