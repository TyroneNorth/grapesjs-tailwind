export const source = `
<div>
  <label for="HeadlineAct" class="block text-sm font-medium text-gray-900"> Headliner </label>

  <select
    name="HeadlineAct"
    id="HeadlineAct"
    class="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
  >
    <option value="">Please select</option>
    <optgroup label="A">
      <option value="AK">Albert King</option>
    </optgroup>

    <optgroup label="B">
      <option value="BBK">B.B King</option>
      <option value="BG">Buddy Guy</option>
    </optgroup>

    <optgroup label="E">
      <option value="EC">Eric Clapton</option>
    </optgroup>

    <optgroup label="J">
      <option value="JM">John Mayer</option>
      <option value="JH">Jimi Hendrix</option>
    </optgroup>

    <optgroup label="S">
      <option value="SRV">Stevie Ray Vaughn</option>
    </optgroup>
  </select>
</div>
`;
