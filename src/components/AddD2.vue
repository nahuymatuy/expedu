<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">標題</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">內容..說明</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />
      </div>

      <hr>
 
      <div class="form-group">
        <label for="spell_zh_tw">漢語_拼音</label>
        <input
          class="form-control"
          id="spell_zh_tw"
          required
          v-model="word.spell_zh_tw"
          name="spell_zh_tw"
        />
      </div>

      <div class="form-group">
        <label for="spell_tayal">泰雅語_拼音</label>
        <input
          class="form-control"
          id="spell_tayal"
          required
          v-model="word.spell_tayal"
          name="spell_tayal"
        />
      </div>


      <div class="form-group">
        <label for="season">泰雅時序</label>
        <input
          class="form-control"
          id="season"
          required
          v-model="word.season"
          name="season"
        />
      </div>

      <div class="form-group">
        <label for="topic">教案主題名稱</label>
        <input
          class="form-control"
          id="topic"
          required
          v-model="word.topic"
          name="topic"
        />
      </div>

      <button @click="saveWord" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>資料已新增成功!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService"; 
import WordDataService from "../services/WordDataService";
export default {
  name: "add-tutorial",
  data() {
    return {
       word: {  
        spell_tayal: "",
        spell_zh_tw: "", 
        season:"",
        topic:"",
        description: "", 
      },


      tutorial: {
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
        published: false
      };

      TutorialDataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    saveWord() {
        var data = {
          word_tayal: this.word.spell_tayal,
          word_zh_tw: this.word.spell_zh_tw,
          topic: this.word.topic,
          season: this.word.season,
          description: this.word.description,
        };

        WordDataService.create(data)
          .then(() => {
            console.log("新增成功!");
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {
        title: "",
        description: "",
        published: false
      };
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
