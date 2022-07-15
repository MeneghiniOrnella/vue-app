<template>
    <form>
        <input type="text" name="name" id="name" class="form-control my-2" placeholder="Ingrese nombre" v-model="task.taskName">
        <div class="form-check form-check-inline">
            <input type="checkbox" name="check1" id="check1">
            <label for="check1">check1</label>
            <input type="checkbox" name="check2" id="check2">
            <label for="check2">check2</label>
        </div>
    </form>
    <p>{{ task }}</p>
</template>

<script>
export default{
    name: 'Form',
    data() {
        return {
            tarea: {
                taskName: '',
                categories: []
            }
        }
    }
}
</script>