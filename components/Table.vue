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
          @click="proteins = $vs.sortData($event, proteins, 'id')"
        >
          {{ tr }}
        </vs-th>
      </vs-tr>
    </template>
    <template #tbody>
      <vs-tr
        v-for="(tr, i) in $vs.getSearch(proteins, search)"
        :key="i"
        :data="tr"
      >
        <vs-td v-for="(val, kw) in tr" :key="kw">
          {{ val }}
        </vs-td>
      </vs-tr>
    </template>
  </vs-table>
</template>

<script>
export default {
  data: () => ({
    search: '',
    columns: [
      '廠商',
      '品名',
      '單價',
      '碳水化合物/膳食纖維(g)',
      '蛋白質(g)',
      '脂肪(g)',
      '鈉',
      'BCAAs(g)',
      '鈣',
      '磷',
      '鎂',
      '鉀',
      '氯',
      '麩胺酸',
      '鎂',
      '維生素D(μg)',
      '維生素B1',
      '維生素B2',
      '維生素B6',
      '維生素B12(μg)',
      '精氨酸',
      '牛磺酸',
      '穀氨酸能',
      '必要氨基酸',
      '非必要氨基酸',
      '甜菜根萃取物',
    ],
    proteins: [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        website: 'hildegard.org',
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        website: 'anastasia.net',
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        website: 'ramiro.info',
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        website: 'kale.biz',
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        website: 'demarco.info',
      },
      {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        website: 'ola.org',
      },
      {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        website: 'elvis.io',
      },
      {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        website: 'jacynthe.com',
      },
      {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        website: 'conrad.com',
      },
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        website: 'ambrose.net',
      },
    ],
  }),
}
</script>
