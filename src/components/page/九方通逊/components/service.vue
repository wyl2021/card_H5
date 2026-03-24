<template>
    <div class="service">
        <h3 style="text-align: center;margin-top: 16px;">相关资讯</h3>
        <div class="service-box">
            <div v-for="(t, i) in list" class="service-item" :key="i" @click="handleClick(t)">
                <div class="service-title">{{ t.title || "" }}</div>
                <div class="service-desc">{{ t.releaseTime?t.releaseTime.split(' ')[0] : '' }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'service',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            list: []
        }
    },
    created() {
        this.getServiceList()
    },
    methods: {
        handleType(type) {
            let typeMap = ''
            switch (type) {
                case '空运专线':
                    typeMap = 'sea'
                    break;
                case '空运专线':
                    typeMap = 'air'
                    break;
                case '小包专线':
                    typeMap = 'packet'
                    break;
                default:
                    typeMap = 'sea'
                    break;
            }
            return typeMap
        },
        async getServiceList() {
            console.log(this.props.data)
            await axios.post('/news-api/portal/front/newsCenter/fetchProductNews?type='+this.handleType(this.data.name),
                {
                    pageNum: 1,
                    pageSize: 15,
                    
                }
            ).then(res => {
                console.log(res)
                
                if (res.data.code == 0) {
                    this.list = res.data.data || []
                    console.log(this.list)
                }

            })
        }
    }
}
</script>
<style scoped lang="scss">
.service-box {
    background-color: #fff;
    // margin: 0 auto;
    padding: 16px;
    overflow-y: auto;
    height: 300px;
    .service-item {
        display: flex;
        align-items: center;
        border-bottom: 0.5px solid #f5f5f5;
        padding: 10px 0;
        
    }
}

.service-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    /* 多行超出 */
    -webkit-box-orient: vertical;
    width: 220px;
    color: #1d2129;
    font-size: 14px;
    flex: 1
}

.service-desc {
    font-size: 12px;
    color: #86909c;

}
</style>
