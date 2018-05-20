<template>
    <div class="panel panel-defautl">
            <div class="panel-heading">
                <h1 class="text-center">已有时长</h1>
            </div>
            <div class="panel-body">
                <h1 class="text-center">{{ time }}</h1>
            </div>
    </div>
</template>


<<script>
    export default{
        computed:{
            time(){
                return this.$store.state.totalTime
            }
        }
    }
</script>