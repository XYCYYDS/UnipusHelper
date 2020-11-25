<template>
  <div id="container-setting-base">
    <div v-for="(section, index) in sections" :key="index" class="section">
      <hr v-if="index !== 0" />
      <div class="title" @click="section.display = !section.display">
        {{ section.title }}
        <Arrow :opened="section.display"></Arrow>
      </div>
      <ToggleSlide>
        <div v-show="section.display" class="body">
          <div
            v-for="setting in section.settings"
            :key="setting.id"
            class="record"
          >
            <label class="record-left" :for="setting.id">
              {{ setting.name }}
            </label>
            <div class="record-middle">
              <template v-if="setting.type === 'readonly'">
                <div class="readonly">
                  {{ Global.USER_SETTINGS[setting.id] }}
                </div>
              </template>
              <template v-else-if="setting.type === 'switch'">
                <MySwitch
                  :id="setting.id"
                  v-model="Global.USER_SETTINGS[setting.id]"
                ></MySwitch>
              </template>
              <template v-else>
                <input
                  :id="setting.id"
                  class="input"
                  :value="Global.USER_SETTINGS[setting.id]"
                  @input="
                    Global.USER_SETTINGS[setting.id] = $event.target.value
                  "
                />
              </template>
            </div>
            <div class="record-right">
              {{ setting.description }}
            </div>
          </div>
        </div>
      </ToggleSlide>
    </div>
    <div class="container-setting-footer">
      <Button label="保存 & 刷新" @click="saveChange"></Button>
      <Button label="还原默认值" @click="setDefault"></Button>
    </div>
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import { Component, Vue, Prop } from "vue-property-decorator";

import { Global, VERSION } from "../global";
import { controlCenter, returnDefaultValues } from "../settings";
import { Requests } from "@utils/requests";
import { setValue } from "@utils/common";

import Arrow from "./components/Arrow.vue";
import Button from "./components/Button.vue";
import MySwitch from "./components/Switch.vue";

import ToggleSlide from "./animations/ToggleSlide.vue";

@Component({
  components: {
    MySwitch,
    Arrow,
    Button,
    ToggleSlide,
  },
})
export default class Setting extends Vue {
  Global = Global;
  USER_SETTINGS = Global.USER_SETTINGS;
  sections = controlCenter;

  created() {
    Requests.checkVersion(VERSION);
  }

  async saveChange() {
    await setValue("USER_SETTINGS", Global.USER_SETTINGS);
    location.reload(true);
  }

  setDefault() {
    returnDefaultValues();
  }
}
</script>

<style scoped>
#container-setting-base {
  display: none;
  position: fixed;

  top: 20%;
  left: 50%;
  width: 800px;
  margin: 20px;
  z-index: 101;

  font-size: 16px;
  line-height: 100%;

  background: rgba(255, 255, 255, 0.95);
  border: black 2px solid;
  border-radius: 20px;

  transform: translate(-50%, 0%);
  animation: slide_in 0.8s;
  animation-timing-function: ease-out;
}

@keyframes slide_in {
  from {
    left: 0%;
    opacity: 0;
  }

  80% {
    left: 53%;
  }

  to {
    left: 50%;
    opacity: 1;
  }
}

div.section {
  margin: 0 10px;
}

div.title {
  text-align: center;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 5px;
}

div.body {
  overflow: hidden;
}

/* -------------------- */

div.record {
  display: table-row;
  text-align: center;
  margin: 5px 0px;
  padding: 5px;
}

.record-left {
  display: table-cell;
  cursor: pointer;
  width: 80px;
}

/* 中间部分居中对齐的实现 */
.record-middle {
  display: table-cell;
  text-align: center;
  min-width: 100px;
  max-width: 100px;
  min-height: 25px;
  margin: 2px 5px;
  padding: 0px;
}

.record-middle .input {
  width: 80px;
  height: 21px;
  text-align: center;
  font-size: 16px;
}

.record-middle .my-switch {
  vertical-align: middle;
  margin: 2px 5px;
}

.record-middle .readonly {
  min-height: 25px;
  margin-top: 5px;
}
/* -------------------- */

.record-right {
  display: table-cell;
  text-align: left;
}

hr {
  margin: 5px;
}

.container-setting-footer {
  display: flex;
  justify-content: center;
  /* justify-content: flex-end; */
  margin: 5px 0;
}
.container-setting-footer .my-button {
  margin: 0 5px;
}
</style>