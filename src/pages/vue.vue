<template>
     <div class="container">
        <div class="table" id="table">
            <div class="input-block">
                <div class="input-block__item">
                    <label for="name">Name</label>
                    <input name="name" id="name" type="text" v-model="items.name">
                </div>
                <div class="input-block__item">
                    <label for="quantity">Quantity</label>
                    <input name="quantity" id="quantity" type="text" v-model="items.quantity">
                </div>
                <div class="input-block__item">
                    <label for="price">Price</label>
                    <input name="price" id="price" type="text" v-model="items.price">
                </div>
                <div class="input-block__add-btn"><button @click="addNewItem()">Add item</button></div>

                <div class="input-block__errors" v-if="error.length">
                    <ul>
                        <li v-for="error in error">{{ error }}</li>
                    </ul>
                </div>
            </div>
            <div class="table-items">
                <div class="table-items__head">
                    <div>Name</div>
                    <div>Quantity</div>
                    <div>Price</div>
                    <div></div>
                </div>
                <div class="table-items__container">
                    <template v-for="(item,index) in items">
                        <div class="table-items__item">
                            <div class="item_name">{{item.name}}</div>
                            <div class="item_quantity">{{item.quantity}}</div>
                            <div class="item_price">{{item.price}}</div>
                            <div class="table-items_item__controls">
                                <div class="controls_edit-trash active">
                                    <a href="javascript:void(0);" class="edit" @click="editThisItem(item)"
                                        v-if="false"><i class="fas fa-edit"></i></a>
                                    <a href="javascript:void(0);" class="delete" @click="deleteThisItem(item)"><i
                                            class="fas fa-trash"></i></a>
                                </div>
                                <div class="controls_check-times hidden">
                                    <a href="javascript:void(0);" class="save"><i class="fas fa-check"></i></a>
                                    <a href="javascript:void(0);" class="cancel"><i class="fas fa-times"></i></a>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
                <div class="summary">Summary: <span class='sum' v-model="total">{{total}}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    import gridworks from '../js/gridWorksVue.vue'
    import titlemain from '../js/infoTitle.vue'
    
    export default {
        components: {
            gridworks,
            titlemain
        },
        computed: {
            username() {
            return this.$route.params.username
            }
        },
        methods: {
            goBack() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            }
        }
    }
</script>


<style lang="scss">

</style>