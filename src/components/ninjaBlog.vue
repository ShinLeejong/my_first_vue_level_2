<template>
    <div id="blog">
        <div id="blog_post">
            <h2>블로그 포스팅하기</h2>
            <form>
                <label>제목</label>
                <input type="text" v-model.lazy="blog.title" required />
                <label>내용</label>
                <textarea cols="30" rows="3" v-model="blog.content"></textarea>
                <div id="blog_post_checkboxContainer">
                    <h3>당신이 좋아하는 스포츠를 골라주세요(복수 선택 가능)!</h3>
                    <label>축구</label>
                    <input type="checkbox" value="축구" v-model="blog.favorite" />
                    <label>야구</label>
                    <input type="checkbox" value="야구" v-model="blog.favorite" />
                    <label>농구</label>
                    <input type="checkbox" value="농구" v-model="blog.favorite" />
                    <label>배구</label>
                    <input type="checkbox" value="배구" v-model="blog.favorite" />
                </div>
                <label>당신의 성</label>
                <select v-model="blog.name">
                    <option v-for="name in names" v-bind:key="name">{{name}}</option>
                </select>
            </form>
        </div>
        <div id="blog_preview">
            <h2>미리보기</h2>
            <p>
                제목: {{blog.title}}
            </p>
            <p>
                내용: {{blog.content}}
            </p>
                좋아하는 스포츠:
                <ul>
                    <li v-for="sport in blog.favorite" v-bind:key="sport">{{sport}}</li>
                </ul>
            <p>
                당신의 성: {{blog.name}}
            </p>
        </div>        
    </div>
</template>
<script>
export default {
    name: 'blog',
    data() {
        return {
            blog: {
                title: "",
                content: "",
                favorite: [],
                name: ""
            },
            names: ["Shin", "Kim", "Lee", "Park"]
        }
    },
    methods: {

    },
}
</script>
<style scoped>
    * {
        box-sizing: border-box;
    }

    #blog {
        display: grid;
        grid-template-columns: 60% 40%;
    }
    
    #blog_post {
        margin: 1rem auto .5rem;
        max-width: 30rem;
    }

    label {
        display: block;
        margin: 1rem 0 .5rem;
    }

    #blog_preview {
        padding: unset;
        margin: .5rem 0;
    }

    #blog_post_checkboxContainer * {
        display: inline-block;
    }

    h2 {
        margin: unset;
    }

    ul {
        list-style: none;
        padding: unset;
    }

    select {
        width: 4rem;
    }

</style>