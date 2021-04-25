<template>
  <div class="grid">
    <vs-row align="center" justify="space-around" direction="column">
      <vs-col w="8">
        <h1 class="title">高蛋白比較表</h1>

        <h2 class="subtitle">
          <p>此網站僅用於比較市面上的高蛋白的成分和價格比較。</p>
          <p>1. 每一份以 35g 為標準計算</p>
          <p>2. 未標示重量的成分以 mg 為預設單位</p>
          <p>
            3.
            價格皆以廠商官方或指標性的商家網站的原價為標準計算，折扣價格請自行換算
          </p>
        </h2>
        <Table />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Table from '~/components/Table.vue'

export default {
  components: {
    Table,
  },
}
</script>

<style>
.container {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}

.title {
  align-items: center;
  color: #35495e;
  display: flex;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 55px;
  font-weight: 300;
  justify-content: center;
  letter-spacing: 1px;
  margin: 25px 0;
  text-transform: capitalize;
}

.subtitle {
  color: #526488;
  font-size: 1.1rem;
  font-weight: 300;
  padding-bottom: 15px;
  word-spacing: 2px;
}
</style>
