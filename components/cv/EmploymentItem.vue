<template>
  <div class="timeline">
    <header class="timeline-header" v-if="isFull">
      <span class="tag is-medium is-dark is-success">{{ new Date().getFullYear() }}</span>
    </header>
    <div v-for="(group, groupName) in historyGroupByYear" :key="groupName" :class="isFull?'':'content'">
      <timeline-item v-for="(option, index) in group" :key="index" :start="option.start" :title="option.position" :is-full="isFull">
        <div>
          {{ option.summary }}
        </div>
        <div>
          <ul>
            <li v-for="(highlight, sid) in option.highlights" :key="sid">
              {{ highlight }}
            </li>
          </ul>
        </div>
        <div class="tags">
            <span v-for="(keyword, sid) in option.keywords" :key="sid" class="tag is-rounded is-info">
                {{ keyword }}
            </span>
        </div>
      </timeline-item>
      <span v-if="isFull" class="tag is-medium is-success">{{ groupName * -1 }}</span>
    </div>
  </div>
</template>

<script>
  import TimelineItem from "~/components/TimelineItem.vue";

  export default {
    name: 'EmploymentItem',
    components: { TimelineItem },
    props: {
      options: Object,
      isFull: {
          type: Boolean,
          default: true
      }
    },
    computed: {
      historyGroupByYear() {
        return this.options.employment.history.reduce(function (obj, item) {
            // cheap trick to sort descending
            const key = -new Date(item.start).getFullYear();
            if (!obj.hasOwnProperty(key)) {
                obj[key] = [];
            }
        
            obj[key].push(item);
            return obj;
        }, {});
      }
    }
 }
</script>