<script lang="ts" setup>
  const cartState = useCartState()
</script>
<template>
  <section>
    <div class="header">
      <AtomHeading :variant="'small'">Carrinho</AtomHeading>
      <label>({{ cartState.products.length }} itens)</label>
    </div>
    <div v-if="cartState.products.length" class="product-list">
      <MoleculeProduct
        v-for="(cartProduct, i) in cartState.products" :key="i"
        :product="cartProduct"
        :variant="'small'"
      />
    </div>
    <div v-if="!cartState.products.length" class="empty-cart">
      <img :src="'/assets/icons/cart.svg'">
      <span>{{ 'Até o momento, \nseu carrinho está vazio' }}</span>
    </div>
    <div v-if="cartState.products.length" class="amount">
      <div>
        <label>subtotal</label>
        <span>{{ $formatCurrencyToBrl(cartState.subtotal) }}</span>
      </div>
      <div class="shipping">
        <label>frete</label>
        <span>{{ $formatCurrencyToBrl(cartState.shippingAmount) }}</span>
      </div>
      <div class="total">
        <label>total</label>
        <span>{{ $formatCurrencyToBrl(cartState.total) }}</span>
      </div>
    </div>
    <AtomButton
      v-if="cartState.products.length"
      :style="{
        width: '238px',
        height: '50px',
        margin: 'auto'
      }"
    >
      finalizar compra
    </AtomButton>
  </section>
</template>
<style lang="scss" scoped>
  section {
    display: flex;
    flex-flow: column;
    width: 100%;
    max-width: 100%;
    @media(min-width: 1280px) { max-width: 262px; }
    height: min-content;
    min-height: 325px;
    padding: 20px 0 10px;
    margin-left: auto;
    border: $border;
    border-radius: 4px;

    & > *{ padding: 0 20px; }

    div { display: flex; }

    label {
      font-size: 14px;
      color: $gray-3;
    }

    .header {
      flex-flow: row;
      align-items: center;

      label { margin-left: 5px; }
    }

    .product-list {
      flex-flow: column;
      margin-top: 19px;
      scrollbar-color: $gray-2 $gray;
      scrollbar-width: thin;

      @media(min-width: 1280px) {
        padding-right: 0;
        min-height: 215px;
        max-height: 225px;
        margin-right: 7px;
        overflow-y: auto;
      }

      &::-webkit-scrollbar { width: 5px; }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px $gray;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: $gray-2;
        border-radius: 10px;
      }
    }

    .empty-cart {
      flex-flow: column;
      justify-content: center;
      align-items: center;
      max-height: 210px;
      margin: 50px auto 0;

      img { width: 90px; height: 72px; }
      span {
        max-width: 200px;
        margin-top: 18px;
        text-align: center;
        color: $gray-4;
        white-space: pre-line;
      }
    }
    .amount {
      margin-top: 10px;
      flex-flow: column;

      div {
        justify-content: space-between;
        align-items: center;

        span {
          font-weight: bold;
          font-size: 16px;
          color: $gray-5;
        }

        &.shipping { margin-top: 15px }
        &.total {
          margin: 20px 0;
          span { font-size: 20px; }
        }
      }
    }
  }
</style>
