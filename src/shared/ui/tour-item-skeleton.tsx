export const TourItemSkeleton = () => {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-md
        main-gradient-90-deg
        shadow-block
      "
    >
      <div
        className="
          flex justify-between flex-col gap-4 
          main-gradient-90-deg shadow-block 
          p-4 rounded-md
        "
      >
        {/* Левая колонка (дата + время) */}
        <div className="flex flex-col items-start gap-2">
          <div className="h-[48px] w-[250px] bg-whites-100/20 rounded animate-pulse" />
          <div className="h-[28px] w-[110px] bg-whites-100/20 rounded animate-pulse" />
        </div>

        {/* Правая колонка (билеты + локация + площадка) */}
        <div className="flex flex-col items-end gap-1">
          {/* Плейсхолдер под Links "Билеты" */}
          <div className="h-6 w-[78px] bg-whites-100/20 rounded animate-pulse" />

          {/* Локация */}
          <div className="h-7 w-[210px] bg-whites-100/20 rounded animate-pulse" />

          {/* Площадка */}
          <div className="h-7 w-[265px] bg-whites-100/20 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};
