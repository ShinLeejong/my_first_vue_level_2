# my_first_vue_level_2

Vue의 아주 기초적인 부분을 넘어 기초와 중급 사이의 개념을 공부하는 레포지토리입니다.
Vue를 제대로 사용하기 위한 Vue만의 매력을 다루게 될 것이라 생각되어, 굉장히 기대가 됩니다.

## 20210621
main에서부터 import하여 사용하는 이벤트 버스($emit, $on 활용)에 대하여 공부했습니다.
개인적으로 정말 신기하고 재밌었으며, React-Redux의 Dispatch, Subscribe와 비슷하면서도
훨씬 간단하게 사용하는 것 같아서 정말 마음에 들고 신기하고 재미있습니다.
import방식의 이벤트 버스는 많이 사용되고 복잡할수록 디버깅의 어려움이 있다고 하고,
Vue에서 자체적으로 제공하는 EventBus는 컴포넌트 간 디펜던시가 깊어질수록 비효율적이라고 하는데,
다소 이해가 되네요.

생애 주기 훅(Life-cycle Hooks)에 대하여 공부하였습니다.
beforeCreate -> created -> beforeMount -> mounted -> beforeUpdate -> updated -> destroyed