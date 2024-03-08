export const source = `
<!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->

<div>
  <label for="OrderNotes" class="sr-only">Order notes</label>

  <div class="overflow-hidden">
    <textarea
      id="OrderNotes"
      class="w-full resize-none border-x-0 border-t-0 border-gray-200 px-0 align-top sm:text-sm"
      rows="4"
      placeholder="Enter any additional order notes..."
    ></textarea>

    <div class="flex items-center justify-end gap-2 py-3">
      <button
        type="button"
        class="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
      >
        Clear
      </button>

      <button
        type="button"
        class="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
      >
        Add
      </button>
    </div>
  </div>
</div>
`;
