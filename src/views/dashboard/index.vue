<template>
  <div class="dashboard-container">
      <p>gsdyh</p>
  </div>
</template>

<script>
console.log('fasg')
import { mapGetters } from 'vuex'
//import adminDashboard from './admin'
import editorDashboard from './editor'
export default {
  name: 'dashboard',
 components: {  editorDashboard },
  data() {
    return {
     // currentRole: 'adminDashboard'
    }

  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
    //  this.currentRole = 'editorDashboard'
    }
  }
}
</script>