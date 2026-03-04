"use client";
import { Buttons, Inputs } from "@/shared";
import { useMerchForm } from "../model/use-merch-form";
import { IMerch } from "@/entities/merch/model/type";
import { useToggleSizeMerch } from "../model/use-toggle-size-merch";

type Props = {
  initialData: IMerch;
};

export const MerchForm = ({ initialData }: Props) => {
  const { form, isError, isSuccess } = useMerchForm(initialData);
  const { sizeInput, setSizeInput, handleAddSize, handleRemoveSize } =
    useToggleSizeMerch();
  return (
    <form
      className="max-w-4xl mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div className="rounded-md main-gradient-90-deg shadow-block p-8 flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          <form.Field
            name="title"
            children={(field) => (
              <>
                <div className="flex flex-col gap-2">
                  <label htmlFor="title" className="text-sm text-whites-100/60">
                    Название мерча
                  </label>
                  <Inputs
                    id="title"
                    type="text"
                    required
                    placeholder="Черная худи с принтом"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <em className="text-red-400/80 text-sm">
                      {field.state.meta.errors[0]?.message}
                    </em>
                  )}
                </div>
              </>
            )}
          />
          <form.Field
            name="price"
            children={(field) => (
              <>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price" className="text-sm text-whites-100/60">
                    Цена
                  </label>
                  <Inputs
                    id="price"
                    type="text"
                    required
                    placeholder="29.99"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <em className="text-red-400/80 text-sm">
                      {field.state.meta.errors[0]?.message}
                    </em>
                  )}
                </div>
              </>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          <form.Field
            name="shortDescription"
            children={(field) => (
              <>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="shortDescription"
                    className="text-sm text-whites-100/60"
                  >
                    Краткое описание
                  </label>
                  <Inputs
                    id="shortDescription"
                    type="text"
                    required
                    placeholder="Чёрная футболка с изображением"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <em className="text-red-400/80 text-sm">
                      {field.state.meta.errors[0]?.message}
                    </em>
                  )}
                </div>
              </>
            )}
          />
          <form.Field
            name="sizes"
            children={(field) => (
              <>
                <div className="flex flex-col gap-2">
                  <label htmlFor="sizes" className="text-sm text-whites-100/60">
                    Размеры
                  </label>
                  <div className="flex justify-between gap-4">
                    <Inputs
                      id="sizes"
                      type="text"
                      placeholder="M, L"
                      value={sizeInput}
                      onBlur={field.handleBlur}
                      onChange={(e) => setSizeInput(e.target.value)}
                    />
                    <Buttons
                      onClick={() =>
                        handleAddSize(field.state.value, field.handleChange)
                      }
                      className="px-3! py-2! w-full"
                      type="button"
                      text="Добавить"
                      as="button"
                      variant="primary"
                      disabled={!sizeInput.trim()}
                    />
                  </div>
                  {field.state.meta.errors.length > 0 && (
                    <em className="text-red-400/80 text-sm">
                      {field.state.meta.errors[0]?.message}
                    </em>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm text-whites-100/60">
                    Список добавленных размеров:
                  </h4>
                  <ul className="flex flex-row gap-6 flex-wrap">
                    {field.state.value.length === 0 ? (
                      <p>В мерче нет размеров</p>
                    ) : (
                      field.state.value.map((size, index) => (
                        <li
                          className="inline-flex items-center gap-3"
                          key={index}
                        >
                          {size}{" "}
                          <span
                            onClick={() =>
                              handleRemoveSize(
                                index,
                                field.state.value,
                                field.handleChange,
                              )
                            }
                            className="cursor-pointer border border-red-500/40 text-red-400 hover:bg-red-500/10 rounded-md py-[1px] px-3"
                          >
                            x
                          </span>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </>
            )}
          />
          <form.Field
            name="image"
            children={(field) => (
              <>
                <div className="flex flex-col gap-2">
                  <label htmlFor="image" className="text-sm text-whites-100/60">
                    Картинка мерча
                  </label>
                  <Inputs
                    id="image"
                    type="text"
                    required
                    placeholder="/merch/shadow.jpg"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <em className="text-red-400/80 text-sm">
                      {field.state.meta.errors[0]?.message}
                    </em>
                  )}
                </div>
              </>
            )}
          />
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <div className="flex gap-4 pt-6 justify-between">
              <Buttons
                className="min-w-[210px]"
                type="submit"
                text={isSubmitting ? "Сохранение..." : "Сохранить изменения"}
                as="button"
                variant="primary"
                disabled={!canSubmit || isSubmitting}
              />
              <Buttons
                type="button"
                text="Удалить тур"
                as="button"
                variant="danger"
                disabled={!canSubmit || isSubmitting}
              />
            </div>
          )}
        />
      </div>
      {isSuccess && (
        <div className="text-green-400 text-sm text-center">
          Мерч успешно сохранен!
        </div>
      )}
      {isError && (
        <div className="text-red-400/80 text-sm text-center">{isError}</div>
      )}
    </form>
  );
};
