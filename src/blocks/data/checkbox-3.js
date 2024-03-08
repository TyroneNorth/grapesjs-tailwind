export const source = `
<!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->

<fieldset>
  <legend class="sr-only">Checkboxes</legend>

  <div class="divide-y divide-gray-200">
    <label for="Option1" class="flex cursor-pointer items-start gap-4 py-4">
      <div class="flex items-center">
        &#8203;
        <input type="checkbox" class="size-4 rounded border-gray-300" id="Option1" />
      </div>

      <div>
        <strong class="font-medium text-gray-900"> John Clapton </strong>

        <p class="mt-1 text-pretty text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </label>

    <label for="Option2" class="flex cursor-pointer items-start gap-4 py-4">
      <div class="flex items-center">
        &#8203;
        <input type="checkbox" class="size-4 rounded border-gray-300" id="Option2" />
      </div>

      <div>
        <strong class="font-medium text-gray-900"> Peter Mayer </strong>

        <p class="mt-1 text-pretty text-sm text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto!
        </p>
      </div>
    </label>

    <label for="Option3" class="flex cursor-pointer items-start gap-4 py-4">
      <div class="flex items-center">
        &#8203;
        <input type="checkbox" class="size-4 rounded border-gray-300" id="Option3" />
      </div>

      <div>
        <strong class="font-medium text-gray-900"> Eric King </strong>

        <p class="mt-1 text-pretty text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, mollitia.
        </p>
      </div>
    </label>
  </div>
</fieldset>
`;
