<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
        :full-name="activeUser.name"
        :info-text="activeUser.description"
        :role="activeUser.role"
    ></user-info>
    <test-slot>
      <template v-slot:header="{text }">
        {{ text }}
      </template>
    </test-slot>
    <!--Test test-->
    <test-props-list>
      <template v-slot:default="SlotProps">
        {{ SlotProps.firstName }} {{ SlotProps.latsName }}
      </template>
    </test-props-list>
    <test-props-list>
      <template v-slot:default="SlotProps">
        {{ SlotProps.firstName }}
      </template>
    </test-props-list>
    <div>
      <button @click="setSelectedComponent('active-goals')"> active-goals</button>
      <button @click="setSelectedComponent('manage-goals')"> manage-goals</button>
    </div>
    <!--    <manage-goals v-if="selectedComponents === 'manage-goals'"></manage-goals>-->
    <!--    <active-goals v-if="selectedComponents === 'active-goals'"></active-goals>-->
    <keep-alive>
      <component :is="selectedComponents"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import UserInfo from "@/components/UserInfo.vue";
import BadgeList from "@/components/BadgeList.vue";
import TestSlot from "@/components/TestSlot.vue";
import TestPropsList from "@/components/TestPropsList.vue";
import ManageGoals from "@/components/ManageGoals.vue";
import ActiveGoals from "@/components/ActiveGoals.vue";


export default {
  components: {
    TheHeader,
    UserInfo,
    BadgeList,
    TestSlot,
    TestPropsList,
    ActiveGoals,
    ManageGoals,

  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      selectedComponents: 'active-goals',
      helloGreat: 'Hello'

    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponents = cmp
    },
    changeHello(event) {
      this.helloGreat = event
    }
  }
};
</script>

<style>

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.green {
  background-color: green;
}

.red {
  background-color: red;
}
</style>