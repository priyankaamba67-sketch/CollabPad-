import { Extension } from "@tiptap/react";
import "@tiptap/extension-text-style";
declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    fontSize: {
      setFontSize: (Size: string) => ReturnType;
      unsetFontSize: () => ReturnType;
    };
  }
}
export const FontSizeExtension = Extension.create({
  name: "fontsize",
  addOptions() {
    return {
      types: ["textStyle"],
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          FontSize: {
            default: null,
            parseHTML: (element) => element.style.fontSize,
            renderHTML: (attributes) => {
              if (!attributes.fontSize) {
                return {};
              }
              return {
                style: "font-size:${attributes.fontSize}",
              };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setFontSize:
        (FontSize: string) =>
        ({ chain }) => {
          return chain().setMark("textStyle", { FontSize }).run();
        },
      unsetFontSize:
        () =>
        ({ chain }) => {
          return chain()
            .setMark("textStyle", { FontSize: null })
            .removeEmptyTextStyle()
            .run();
        },
    };
  },
});
