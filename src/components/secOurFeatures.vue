<template>
  <div class="section container">
    <h2 class="section__title sec__title">Our Features</h2>
    <div class="section__list flex">
      <div
        class="item flex"
        v-for="(feature, index) in data_features"
        :key="index"
      >
        <img :src="feature.img" alt="" />
        <div class="describe">
          <p class="name">{{ feature.name }}</p>
          <p class="text sec__text">
            {{ feature.text }}
          </p>
          <a href="#"
            >Try Blog Content
            <img src="../assets/images/arrow_right.png" alt="" />
          </a>
        </div>
        <button
          class="edit-btn"
          @click="
            {
              editItem(feature);
            }
          "
        >
          Edit
        </button>
        <button class="delete-btn" @click="deleteItem(index)">DELETE</button>
      </div>
    </div>
    <div class="edit-form" :class="{ activeedit: isActiveEdit }">
      <p class="edit-form__title">EDIT</p>
      <input class="edit-image" type="text" v-model="current.img" />
      <input class="edit-name" type="text" v-model="current.name" />
      <textarea class="edit-text" v-model="current.text"></textarea>
      <button
        class="save"
        type="button"
        @click="
          {
            saveEdit(current.id);
          }
        "
        :disabled="isDisabledEdit(current)"
      >
        Save
      </button>
    </div>
    <button class="add-btn" @click="addItem()">ADD NEW FEATURE</button>
    <div class="add-form" :class="{ activeadd: isActiveAdd }">
      <p class="add-form__title">ADD NEW FEATURE</p>
      <input
        class="add-image"
        type="text"
        v-model="addnew.img"
        placeholder="Enter item's image"
      />
      <input
        class="add-name"
        type="text"
        v-model="addnew.name"
        placeholder="Enter item's name"
      />
      <textarea
        class="add-text"
        type="text"
        v-model="addnew.text"
        placeholder="Enter item's describe"
      ></textarea>
      <button
        class="save"
        type="button"
        @click="saveAdd()"
        :disabled="isDisabledAdd(addnew)"
      >
        Save
      </button>
    </div>
    <div
      class="blur-bg"
      :class="{ activebg: isActiveBg }"
      @click="removeActive()"
    ></div>
  </div>
</template>

<script>
import { DATA_FEATURES } from "@/resources/data";
export default {
  name: "section__list",
  data() {
    return {
      data_features: DATA_FEATURES,
      isActiveEdit: false,
      isActiveAdd: false,
      isActiveBg: false,
      current: {
        id: "",
        img: "",
        name: "",
        text: "",
      },
      addnew: {
        id: "",
        img: "",
        name: "",
        text: "",
      },
    };
  },

  methods: {
    editItem: function ({ id, img, name, text }) {
      this.isActiveEdit = true;
      this.isActiveBg = true;
      this.current.id = id;
      this.current.img = img;
      this.current.name = name;
      this.current.text = text;
    },
    saveEdit: function (idSave) {
      this.isActiveEdit = false;
      this.isActiveBg = false;
      this.data_features[idSave].img = this.current.img;
      this.data_features[idSave].name = this.current.name;
      this.data_features[idSave].text = this.current.text;
    },
    removeActive: function () {
      this.isActiveEdit = false;
      this.isActiveAdd = false;
      this.isActiveBg = false;
    },
    addItem: function () {
      this.isActiveAdd = true;
      this.isActiveBg = true;
    },
    saveAdd: function () {
      this.isActiveAdd = false;
      this.isActiveBg = false;
      let item = {
        id: this.addnew.id,
        img: this.addnew.img,
        name: this.addnew.name,
        text: this.addnew.text,
      };
      this.data_features.push(item);
      this.addnew.id = "";
      this.addnew.img = "";
      this.addnew.name = "";
      this.addnew.text = "";
    },
    deleteItem: function (idDelete) {
      this.data_features.splice(idDelete, 1);
    },
    isDisabledEdit: function (check) {
      if (check.img == "" || check.name == "" || check.text == "") {
        return true;
      } else {
        return false;
      }
    },
    isDisabledAdd: function (check) {
      if (check.img == "" || check.name == "" || check.text == "") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/common.scss";
.section {
  margin-bottom: 135px;
  &__title {
    margin-bottom: 100px;
  }
  &__list {
    flex-wrap: wrap;
    row-gap: 40px;
    column-gap: calc((100% - 3 * 370px) / 2);
    margin-bottom: 50px;
    .item {
      width: 370px;
      padding: 48px 34px;
      border: 1px solid #f1f1f1;
      border-radius: 5px;
      align-items: flex-start;
      justify-content: space-between;
      transition: all 0.3s;
      position: relative;
      &:hover {
        border: 1px solid black;
        .edit-btn {
          display: block;
        }
        .delete-btn {
          display: block;
        }
      }
      .describe {
        max-width: 220px;
        .name {
          font-weight: 600;
          font-size: 20px;
          line-height: 22px;
          color: $color--title;
          margin-bottom: 25px;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .text {
          margin-bottom: 21px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        a {
          color: $color--lightblue;
          transition: all 0.3s;
          > img {
            margin-left: 8px;
          }
          &:hover {
            color: $color--hover;
          }
        }
      }
      .edit-btn {
        padding: 3px 10px;
        background-color: lightgreen;
        border-radius: 10px;
        border: 1px solid black;
        position: absolute;
        top: 10px;
        right: 100px;
        transition: all 0.3s;
        display: none;
        &:hover {
          background-color: green;
          color: white;
        }
      }
      .delete-btn {
        padding: 3px 10px;
        background-color: lightcoral;
        border-radius: 10px;
        border: 1px solid black;
        position: absolute;
        top: 10px;
        right: 10px;
        transition: all 0.3s;
        display: none;
        &:hover {
          background-color: red;
          color: white;
        }
      }
    }
  }
  .edit-form {
    position: fixed;
    width: 500px;
    padding: 15px;
    border: 2px solid black;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 3;
    display: none;
    &.activeedit {
      display: block;
    }
    .edit-form__title {
      text-align: center;
      font-size: 20px;
      margin-bottom: 10px;
    }
    > input,
    textarea {
      padding: 5px 10px;
      width: 100%;
      max-height: 100px;
      border: 1px solid black;
      margin-bottom: 15px;
    }
    .save {
      padding: 5px 0;
      width: 100%;
      background-color: lightgreen;
      border: 1px solid black;
      transition: all 0.3s;
      &:hover {
        background-color: green;
        color: white;
      }
    }
  }
  .add-btn {
    padding: 5px 20px;
    background-color: lightgreen;
    border-radius: 10px;
    border: 1px solid black;
    margin-left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    transition: all 0.3s;
    &:hover {
      background-color: green;
      color: white;
    }
  }
  .add-form {
    position: fixed;
    width: 500px;
    padding: 15px;
    border: 2px solid black;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 3;
    display: none;
    &.activeadd {
      display: block;
    }
    .add-form__title {
      text-align: center;
      font-size: 20px;
      margin-bottom: 10px;
    }
    > input,
    textarea {
      padding: 5px 10px;
      width: 100%;
      max-height: 100px;
      border: 1px solid black;
      margin-bottom: 15px;
    }
    .save {
      padding: 5px 0;
      width: 100%;
      background-color: lightgreen;
      border: 1px solid black;
      transition: all 0.3s;
      &:hover {
        background-color: green;
        color: white;
      }
    }
  }
  .blur-bg {
    position: fixed;
    background-color: rgba(174, 174, 174, 0.5);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: none;
    &.activebg {
      display: block;
    }
  }
}
</style>
