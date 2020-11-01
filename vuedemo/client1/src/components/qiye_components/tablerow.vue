<template>
    <div class="table-cell">
        <a href="" class="button">
            <img :src="data1" alt="">
        </a>
    </div>
</template>
<script>
export default {
    props:['data1']
}
</script>
<style>
.table-cell{
    width: 220px;
    height: 95px;
    margin: 10px;
    text-align: center;
}

.button{
    display: inline-block;
    width: 133px;
    height: 95px;
    background-color:rgba(128,101,84,0.10);
    line-height: 95px;
}
.button:hover{
    background-color:rgba(128,101,84,0.30);
}
.button img{
    margin-top: 18.5px ;
}
</style>