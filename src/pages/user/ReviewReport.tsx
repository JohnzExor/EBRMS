const ReviewReport = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-medium text-2xl">Review</h1>
      <span className="font-semibold">
        Name: <span className="font-normal">F***</span>
      </span>
      <span className="font-semibold">
        Violation: <span className="font-normal">Bisaya</span>
      </span>
      <span className="font-semibold">
        Location: <span className="font-normal">PalSU</span>
      </span>
      <span className="font-semibold">
        Date: <span className="font-normal">1/2/2023</span>
      </span>
      <span className="font-semibold">
        Details:{" "}
        <span className="font-normal">
          TypeScript extends JavaScript and improves the developer experience.
          It enables developers to add type safety to their projects. Moreover,
          TypeScript provides various other features, like interfaces, type
          aliases, abstract classes, function overloading, tuple, generics, etc.
        </span>
      </span>
    </div>
  );
};

export default ReviewReport;
