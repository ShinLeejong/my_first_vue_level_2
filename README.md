# my_first_vue_level_2

Vue의 아주 기초적인 부분을 넘어 기초와 중급 사이의 개념을 공부하는 레포지토리입니다.
Vue를 제대로 사용하기 위한 Vue만의 매력을 다루게 될 것이라 생각되어, 굉장히 기대가 됩니다.

## 후기
Vue 2를 마쳤으니 시간이 나면 Vue 3도 시도해 볼 생각입니다.
진짜 확실히 React보다 속도가 빠르고, 생산성이 React보다
좋다는 느낌은 들지만 그래도 React가 주는 다소 Solid한 느낌을
무시할 순 없다는 생각이 들어서, 결국 뭐가 좋다 보다는
Vue도 굉장히 매력적인 프레임워크라는 느낌을 받았습니다.

## 시도해볼까 싶은 것들
Vuex, Vue 3, Vue + TypeScript, Vue + AWS or Firebase

## 20210623
<pre>
Local Registering, 'computed' Method, Mixin
</pre>
Registering을 Global하게가 아닌 Local하게 하는 법과,
computed 메소드, 그리고 Mixin에 대해 익혔습니다.

<pre>
import VueRouter from 'vue-router'
</pre>
SPA의 꽃이라고 할 수 있는, Routing에 대하여 배웠습니다.
Hash방식과 History 방식을 모두 익혔으나, Hash 방식을 유지해보았습니다.

Route Parameter에 대하여 공부하였습니다(/blog/:id).

Firebase course는 React와 몇 번 연동한 경험이 있어 생략합니다.
Vue 2 Tutorial(The Net Ninja)를 마무리 지었습니다.

## 20210622
<pre> vue-resource </pre> 를 사용하여 HTTP Request($http를 이용, POST & GET)를 학습하였고,
서버는 JSONPlaceholder를 활용하여 학습하였습니다.
<pre>
// 지시어 커스터마이징, Customizing Directive
Vue.directive("function name", {
    bind(element, binding, vnode) {

    }
})
</pre>
에 대하여 공부하였습니다. 이건 정말 유용하게 쓸 수 있을 것 같습니다.
React의 Custom Hook처럼 쓸 수도 있겠네요.
<br />
<pre>
// Filter
<h3 v-randomColor>{{post.title | uppercase}}</h3>
</pre>
<pre>
// Global Registering, main.js
Vue.filter("uppercase", (e) => e.toUpperCase());
Vue.filter("slice", (e) =>
  e.length > 100 ? e.slice(0, 100) + ", More..." : e
);
</pre>
Global Registering에 대한 개념을 좀 더 명확히 익히게 되었고,
filter에 대하여 공부하였습니다.

## 20210621
<pre>
main에서부터 import하여 사용하는 이벤트 버스($emit, $on 활용)에 대하여 공부했습니다.
개인적으로 정말 신기하고 재밌었으며, React-Redux의 Dispatch, Subscribe와 비슷하면서도
훨씬 간단하게 사용하는 것 같아서 정말 마음에 들고 신기하고 재미있습니다.
import방식의 이벤트 버스는 많이 사용되고 복잡할수록 디버깅의 어려움이 있다고 하고,
Vue에서 자체적으로 제공하는 EventBus는 컴포넌트 간 디펜던시가 깊어질수록 비효율적이라고 하는데,
다소 이해가 되네요.

생애 주기 훅(Life-cycle Hooks)에 대하여 공부하였습니다.
beforeCreate -> created -> beforeMount -> mounted -> beforeUpdate -> updated -> destroyed

슬롯(Slots)에 대하여 공부하였습니다. 제가 가장 많이 썼던 React에서는 없는 개념인 것 같은 느낌이지만,
Svelte에서 간단하게 맛보기로 본 적이 있습니다. Svelte에서 Slot을 보았을 때도 Vue에서 출발한 개념이라고
보았는데, 만약 잘못된 사실이라면 지적 부탁드립니다. 아무튼 굉장히 유용한 기능인 것 같습니다. 특히
협업 과정에서 큰 빛을 발할 수 있을 것 같네요. 모듈화의 궁극적 모습같은 느낌인 것 같기도 하고요.

Component를 동적으로 상황에 맞게 출력할 수 있는 기법을 공부했습니다. (동적 컴포넌트)
Register라는 기법이 이거에 맞는 건지 모르겠습니다.

Data binding을 하는 방법을 구체적으로 학습했습니다.
정확히, The Net Ninja Tutorial에 나오는 Input:Text, Checkbox, Select 별로
어떻게 데이터 바인딩을 하는 지 구체적으로 익혔고, .lazy 에 대하여 알게 되었습니다.
</pre>