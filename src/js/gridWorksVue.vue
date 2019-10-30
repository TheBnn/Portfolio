<template>
    <div class="grid vue-template">
        <div class="box-content__modify box-content slide" v-for="temp in temp" :key="temp.id" :class="temp.class">
            <div class="content content__modify">
                <div class="popup-content">
                    <div class="title title__portfolio">{{temp.name}}</div>
                    <div class="popup-text">
                        <div class="popup_title"></div>
                        <div class="popup_desc">{{temp.descr}} <div> <span v-if="temp.old">*в настоящий момент сдан клиенту и работает
                                исправно.<br /> Технической поддержкой занимается другой человек.</span></div>
                        </div>
                    </div>
                    <a :href="temp.link">Перейти</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let nextTodoId = 1
    export default {
        data() {
            return {
                temp: [{
                        id: nextTodoId++,
                        name: "М-Медик",
                        descr: "Сайт мед. Клиники",
                        link: "https://m-medik.ru",
                        class: "m-medik",
                        old: true
                    },
                    {
                        id: nextTodoId++,
                        name: "Санмаркет",
                        descr: "Магазин продажи сантехнического оборудования",
                        link: "https://www.sanmarket.ru/",
                        class: "sanmarket",
                        old: true
                    },
                    {
                        id: nextTodoId++,
                        name: "Спутник64",
                        descr: "Магазин Спутник64",
                        link: "https://sputnik64.ru/",
                        class: "sputnik64",
                        old: true
                    },
                    {
                        id: nextTodoId++,
                        name: "Немного Vue",
                        descr: "",
                        link: "/tz-page.html",
                        class: "tz-page",
                        old: false
                    },
                ]
            }
        }
    }
</script>