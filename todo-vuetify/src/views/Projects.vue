<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
          <div slot="header">{{ project.title }}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">{{ project.due }}</div>
              <div>{{ project.content }}</div>
       
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
  
    </v-container>
    </div>
</template>

<script>
import db from '@/fb.js'
  export default {
    data() {
      return {
        projects: [
          // {'title': 'Design a new website landing page', 'person': 'Francis', 'due': '01/06/2019', 'status': 'ongoing', 'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet molestie lorem, nec aliquam ligula pretium id. Pellentesque enim metus, sodales et aliquet at, vestibulum eget lectus. Nullam risus quam, volutpat sed blandit eu, hendrerit vel magna. In ornare sed nisi vel pulvinar. Duis gravida sapien vel accumsan aliquet. Pellentesque ac nunc at lorem bibendum ultricies. Sed hendrerit lobortis ipsum ac gravida. Donec eu elementum ipsum, ac malesuada ex. Morbi pharetra vestibulum sapien. Pellentesque at euismod magna. Sed tempor fringilla tincidunt. Cras tellus velit, maximus sed magna eget, finibus pretium enim. Curabitur et fermentum enim.'},
          // {'title': 'Set up GET route', 'person': 'Tom', 'due': '07/06/2019', 'status': 'overdue', 'content': 'Vestibulum imperdiet orci turpis, a ullamcorper felis euismod in. Aenean quis finibus libero. Phasellus tincidunt ipsum mauris, auctor gravida orci ullamcorper id. Mauris maximus lorem consectetur felis posuere, ut efficitur neque vehicula. Etiam placerat viverra nisl id fringilla. Etiam laoreet metus quis orci condimentum, eget aliquet velit vestibulum. Nunc placerat, mauris eget luctus pharetra, tortor nulla ultrices velit, vitae pretium elit mi at eros. Integer convallis finibus sem. Vivamus nec mauris vel orci imperdiet gravida vitae sit amet elit. Sed molestie urna odio, efficitur tincidunt neque hendrerit quis. Fusce fermentum arcu vel libero pharetra efficitur. Vestibulum feugiat justo at consequat dignissim. Duis ligula urna, volutpat ut efficitur sit amet, vehicula quis leo. Sed metus massa, placerat non enim ultrices, sollicitudin ultrices turpis. Sed at commodo augue, sed porttitor purus. Curabitur accumsan pharetra nisl ut convallis.'},
          // {'title': 'Modify CSS to match new design', 'person': 'Francis', 'due': '01/06/2019', 'status': 'ongoing', 'content': 'Fusce dapibus, lacus eget egestas auctor, lorem justo tempor lectus, nec vulputate est erat et neque. Nunc mi lacus, varius at sagittis vitae, sagittis ut lectus. Mauris mattis elementum ex, sollicitudin fringilla lectus dignissim et. Fusce a nisi quis diam pulvinar facilisis non ac dolor. Donec hendrerit, odio egestas egestas scelerisque, nibh mi rutrum sem, in ullamcorper lectus nibh sit amet nibh. In hac habitasse platea dictumst. Donec ante quam, varius quis quam aliquet, ultrices volutpat metus. Nam mi justo, condimentum nec tellus a, luctus tristique magna. Proin vehicula tincidunt lorem, ac lacinia dui.'},
          // {'title': 'Design a new API', 'person': 'Emily', 'due': '17/06/2019', 'status': 'ongoing', 'content': 'Donec aliquet ultrices est, eu interdum risus rhoncus et. Nullam et mauris blandit, egestas eros condimentum, placerat ligula. In ornare tellus eget sapien porttitor iaculis. Sed vitae libero volutpat, malesuada turpis nec, condimentum tortor. Integer et auctor turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras eget sapien iaculis, euismod urna at, tincidunt mauris. Vestibulum quam neque, varius sit amet mauris vitae, gravida accumsan lacus. Sed interdum tellus ligula, a lacinia magna vulputate et. Quisque vitae magna massa. In vehicula, enim eu ullamcorper semper, orci leo egestas dolor, non malesuada erat sapien at nibh. Pellentesque tincidunt ex in vestibulum lacinia. Suspendisse vulputate arcu facilisis ullamcorper lacinia. Mauris venenatis quam mauris, non varius ipsum ornare a. Cras maximus lectus vitae sem tempus, at ultricies ipsum scelerisque. Ut vel massa bibendum, semper ante at, iaculis justo.'},
          // {'title': 'DB migration to Mongo', 'person': 'Tom', 'due': '07/06/2019', 'status': 'overdue', 'content': 'Vestibulum imperdiet orci turpis, a ullamcorper felis euismod in. Aenean quis finibus libero. Phasellus tincidunt ipsum mauris, auctor gravida orci ullamcorper id. Mauris maximus lorem consectetur felis posuere, ut efficitur neque vehicula. Etiam placerat viverra nisl id fringilla. Etiam laoreet metus quis orci condimentum, eget aliquet velit vestibulum. Nunc placerat, mauris eget luctus pharetra, tortor nulla ultrices velit, vitae pretium elit mi at eros. Integer convallis finibus sem. Vivamus nec mauris vel orci imperdiet gravida vitae sit amet elit. Sed molestie urna odio, efficitur tincidunt neque hendrerit quis. Fusce fermentum arcu vel libero pharetra efficitur. Vestibulum feugiat justo at consequat dignissim. Duis ligula urna, volutpat ut efficitur sit amet, vehicula quis leo. Sed metus massa, placerat non enim ultrices, sollicitudin ultrices turpis. Sed at commodo augue, sed porttitor purus. Curabitur accumsan pharetra nisl ut convallis.'},
          // {'title': 'Fix bugs', 'person': 'Cameorn', 'due': '01/01/2019', 'status': 'complete', 'content': 'Phasellus ut erat id metus finibus tincidunt. Nunc posuere arcu id neque tempus mollis. Quisque et lectus mollis, sodales purus nec, pulvinar nisl. Aenean bibendum quam sed egestas tincidunt. Nullam volutpat, mi in fringilla laoreet, tellus velit lobortis ligula, vitae vehicula sem magna et arcu. Sed nulla arcu, lobortis efficitur nisi sed, pretium aliquet nulla. Curabitur suscipit quam odio, nec volutpat arcu tincidunt in. Donec placerat gravida risus, vel porttitor tellus posuere sit amet. Duis dictum tellus in nulla faucibus elementum.'},
          // {'title': 'Test routes in Postman', 'person': 'Sarah', 'due': '13/06/2019', 'status': 'overdue', 'content': 'Vestibulum imperdiet orci turpis, a ullamcorper felis euismod in. Aenean quis finibus libero. Phasellus tincidunt ipsum mauris, auctor gravida orci ullamcorper id. Mauris maximus lorem consectetur felis posuere, ut efficitur neque vehicula. Etiam placerat viverra nisl id fringilla. Etiam laoreet metus quis orci condimentum, eget aliquet velit vestibulum. Nunc placerat, mauris eget luctus pharetra, tortor nulla ultrices velit, vitae pretium elit mi at eros. Integer convallis finibus sem. Vivamus nec mauris vel orci imperdiet gravida vitae sit amet elit. Sed molestie urna odio, efficitur tincidunt neque hendrerit quis. Fusce fermentum arcu vel libero pharetra efficitur. Vestibulum feugiat justo at consequat dignissim. Duis ligula urna, volutpat ut efficitur sit amet, vehicula quis leo. Sed metus massa, placerat non enim ultrices, sollicitudin ultrices turpis. Sed at commodo augue, sed porttitor purus. Curabitur accumsan pharetra nisl ut convallis.'},
        ]
      }
    },
    computed: {
      myProjects() {
        return this.projects.filter(project => {
          return project.person === 'Tom'
        })
      }
    },
        created() {
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if (change.type === 'added') {
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
    }

  }
</script>
