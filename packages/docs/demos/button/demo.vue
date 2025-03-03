<template>
    <div class="demo">
        <y-button>默认</y-button>
        <y-button type="tertiary">第三级</y-button>
        <y-button type="primary">主要</y-button>
        <y-button type="info">信息</y-button>
        <y-button type="success">成功</y-button>
        <y-button type="warning">警告</y-button>
        <y-button type="error">错误</y-button>
    </div>
</template>

<script setup lang="ts">
import { YButton } from "@yuzutea/yui";
</script>

<style scoped>
.demo {
    display: flex;
    gap: 10px;
}
</style>
