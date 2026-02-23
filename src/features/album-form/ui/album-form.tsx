export const AlbumForm = () => {
  return (
    <form
      action=""
      className="w-[504px] flex flex-col justify-center items-center gap-6 max-sm:w-full"
    >
      <input
        type="email"
        required
        placeholder="example@mail.com"
        className="border border-whites-200 rounded-md w-full py-2 px-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent placeholder:text-whites-300"
      />
      <input
        type="text"
        required
        placeholder="Введите псевдоним"
        className="border border-whites-200 rounded-md w-full py-2 px-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent placeholder:text-whites-300"
      />
      <button
        type="submit"
        className="btn-gradient px-5 py-3 bg-accent rounded-md cursor-pointer flex items-center justify-center gap-2.5 w-full"
      >
        Подписаться
      </button>
    </form>
  );
};
