<template>
  <div class="head">
    <div class="logo">J.</div>
    <i class="setting el-icon-more"></i>
  </div>
  <div class="search_block">
    <div class="search_logo">
      <template v-if="searchDomain == '1'"> <i class="iconfont ali-bing"></i> Bing </template>
      <template v-if="searchDomain == '2'"> <i class="iconfont ali-Google1"></i> Google </template>
      <template v-if="searchDomain == '3'"> <i class="iconfont ali-baidu"></i> Baidu </template>
      <template v-if="searchDomain == '4'"> <i class="iconfont ali-zhihu"></i> Zhihu </template>
    </div>
    <div class="input_block">
      <el-autocomplete autofocus v-model="searchStr" @keyup.enter="doSearch" :fetch-suggestions="querySearch" :placeholder="placeholder">
        <template #append>
          <el-select v-model="searchDomain">
            <el-option v-for="item in searchDomainList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </template>
      </el-autocomplete>
      <el-button @click="doSearch" icon="el-icon-search" type="primary"></el-button>
    </div>
  </div>
  <div class="urls_block">
    <el-row :gutter="10">
      <el-col v-for="item in urls" :key="item.url" :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
        <div class="url_item" @click="goUrl(item.url)">
          <img :src="'/icon/' + item.icon" />
          <p>{{ item.title }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="foot">
    <p>© 2021 简语</p>
    <p>清夜无尘，月色如银。酒斟时，须满十分。-- 苏轼《行香子.述杯》</p>
    <div class="icons">
      <i class="iconfont ali-github"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getSuggestList } from "./util/suggest";

const JY_SEARCHDOMAIN = "JY_SEARCHDOMAIN";

export default defineComponent({
  name: "App",
  components: {},
  data() {
    const searchDomainList = [
      {
        label: ".Bing",
        value: "1",
        placeholder: "微软 Bing 搜索",
      },
      {
        label: ".Google",
        value: "2",
        placeholder: "Google 搜索",
      },
      {
        label: ".Baidu",
        value: "3",
        placeholder: "百度一下，你就知道",
      },
      {
        label: ".Zhihu",
        value: "4",
        placeholder: "发现 - 知乎",
      },
    ];

    return {
      searchStr: "",
      placeholder: "",
      searchDomain: "",
      searchDomainList: searchDomainList,
      urls: [],
    };
  },
  watch: {
    searchDomain(val) {
      window.localStorage.setItem(JY_SEARCHDOMAIN, val);
      this.setPlaceholder();
    },
  },
  mounted() {
    this.init();
    this.loadUrls();
  },
  methods: {
    init() {
      let _searchDomain = window.localStorage.getItem(JY_SEARCHDOMAIN);
      this.searchDomain = _searchDomain || "1";
      this.setPlaceholder();
    },
    setPlaceholder() {
      let currDomain = this.searchDomainList.find((item) => item.value == this.searchDomain);
      if (currDomain) this.placeholder = currDomain.placeholder;
    },
    loadUrls() {
      this.$http.get("/urls.json").then((res) => {
        if (res.status == 200 && Array.isArray(res.data)) {
          this.urls = res.data as [];
        }
      });
    },
    goUrl(url: string) {
      window.location.href = url;
    },
    async querySearch(queryString: string, cb: any) {
      // cb(await getSuggestList(queryString, this.searchDomain));
      cb([]);
    },
    doSearch() {
      let q = encodeURIComponent(this.searchStr);
      switch (this.searchDomain) {
        case "1": {
          window.location.href = `https://cn.bing.com/search?q=${q}`;
          break;
        }
        case "2": {
          window.location.href = `https://www.google.com.hk/search?q=${q}`;
          break;
        }
        case "3": {
          window.location.href = `https://www.baidu.com/s?wd=${q}`;
          break;
        }
        case "4": {
          window.location.href = `https://www.zhihu.com/search?q=${q}`;
          break;
        }
      }
    },
  },
});
</script>

<style lang="scss">
#app {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  color: #303133;
  position: relative;
}
.head {
  position: absolute;
  top: 0;
  width: 100%;
  padding: 30px 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28px;
  .logo {
    font-family: "微软雅黑";
    font-weight: bold;
  }
  .setting {
    cursor: pointer;
  }
}
.search_block {
  width: 80%;
  max-width: 760px;
  .search_logo {
    text-align: center;
    font-size: 42px;
    height: 50px;
    line-height: 50px;
    .iconfont {
      font-size: 48px;
      margin-right: 5px;
    }
  }
  .input_block {
    display: flex;
    width: 80%;
    margin: 0 auto;
    margin-top: 80px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    .el-input-group__append,
    .el-input-group__prepend {
      background-color: #fff;
      border-radius: 0px;
      border-right-width: 0;
    }
    .el-select {
      width: 100px;
      .el-input__inner {
        padding-right: 20px;
      }
    }
    .el-input {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    .el-autocomplete {
      flex-grow: 1;
    }
    .el-button {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      width: 80px;
      font-size: 21px;
      padding: 0px;
      background-color: #0078d4;
      border-left-width: 0;
    }
  }
}
.urls_block {
  width: 80%;
  max-width: 1116px;
  margin-top: 80px;
  .url_item {
    height: 84px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    border-radius: 2px;
    transition: all 0.3s;
    cursor: pointer;
    font-size: 12px;
    background-color: #fff;
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      transform: scale(1.05);
    }
    img {
      margin-bottom: 4px;
      width: 32px;
      height: 32px;
    }
  }
}
.foot {
  position: absolute;
  bottom: 0;
  width: 100%;
  color: rgb(102, 102, 102);
  font-size: 14px;
  text-align: center;
  padding: 40px 0 60px 0;
  & > p {
    margin: 10px 0;
  }
  .icons {
    margin-top: 20px;
  }
}
</style>
