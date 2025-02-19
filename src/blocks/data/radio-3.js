export const source = `
<fieldset class="grid grid-cols-2 gap-4">
  <legend class="sr-only">Delivery</legend>

  <div>
    <label
      for="DeliveryStandard"
      class="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
    >
      <div>
        <p class="text-gray-700">Standard</p>

        <p class="mt-1 text-gray-900">Free</p>
      </div>

      <input
        type="radio"
        name="DeliveryOption"
        value="DeliveryStandard"
        id="DeliveryStandard"
        class="sr-only"
        checked
      />
    </label>
  </div>

  <div>
    <label
      for="DeliveryPriority"
      class="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
    >
      <div>
        <p class="text-gray-700">Next Day</p>

        <p class="mt-1 text-gray-900">£9.99</p>
      </div>

      <input
        type="radio"
        name="DeliveryOption"
        value="DeliveryPriority"
        id="DeliveryPriority"
        class="sr-only"
      />
    </label>
  </div>
</fieldset>
`;
