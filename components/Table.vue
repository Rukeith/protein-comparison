<template>
  <vs-table>
    <template #header>
      <vs-input v-model="search" border placeholder="Search" />
    </template>
    <template #thead>
      <vs-tr>
        <vs-th
          v-for="(tr, i) in columns"
          :key="i"
          :data="tr"
          sort
          @click="proteins = $vs.sortData($event, proteins, tr)"
        >
          {{ $t(tr) }}
        </vs-th>
      </vs-tr>
    </template>
    <template #tbody>
      <vs-tr
        v-for="(tr, i) in $vs.getSearch(proteins, search)"
        :key="i"
        :data="tr"
      >
        <vs-td>{{ tr.brand }}</vs-td>
        <vs-td
          ><a :href="tr.link">{{ tr.name }}</a></vs-td
        >
        <vs-td>{{ tr.price }}</vs-td>
        <vs-td>{{ tr.protein }}</vs-td>
        <vs-td>{{ tr.carbohydrates }}</vs-td>
        <vs-td>{{ tr.dietary_fiber || '' }}</vs-td>
        <vs-td>{{ tr.fat }}</vs-td>
        <vs-td>{{ tr.sodium }}</vs-td>
        <vs-td>{{ tr.BCAAs || '' }}</vs-td>

        <template #expand>
          <div>
            <strong>其他額外成分</strong>
            <li v-for="(val, kw) in tr.others" :key="kw">
              {{ $t(kw) }}: {{ val }}
            </li>
          </div>
        </template>
      </vs-tr>
    </template>
  </vs-table>
</template>

<script>
import proteins from '~/static/data.json'

proteins.forEach((element) => {
  for (const [key, value] of Object.entries(element)) {
    let count = value
    if (key === 'price') {
      count = Math.round(
        (35 / (element.serving * element.weight)) * element.price
      )
    } else if (
      ![
        'brand',
        'name',
        'link',
        'price',
        'weight',
        'serving',
        'others',
      ].includes(key)
    ) {
      count = Math.round(0.35 * value)
    }
    element[key] = count
  }

  if ('others' in element) {
    for (const [key, value] of Object.entries(element.others)) {
      element[key] = Math.round(0.35 * value)
    }
  }
})

export default {
  data: () => ({
    search: '',
    columns: [
      'brand',
      'name',
      'price',
      'protein',
      'carbohydrates',
      'dietary_fiber',
      'fat',
      'sodium',
      'BCAAs',
    ],
    proteins,
  }),
}
</script>

<style>
.vs-table__tr:hover .vs-table__td {
  background-color: #fb966e;
}
</style>
