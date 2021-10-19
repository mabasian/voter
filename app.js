const entries = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    desc: "Ein Nudelgericht mit Hackfleischsoße.",
    upvotes: 16,
    downvotes: 0,
    autor: "Italien",
    image: "https://via.placeholder.com/64",
  },
  {
    id: 2,
    title: "Wiener Schnitzel",
    desc: "Ein dünnes Schnitzel aus Kalbfleisch.",
    upvotes: 5,
    downvotes: 0,
    autor: "Österreich",
    image: "https://via.placeholder.com/64",
  },
  {
    id: 3,
    title: "Peking-Ente",
    desc: "Das Kaiserliche Gericht.",
    upvotes: 20,
    downvotes: 0,
    autor: "China",
    image: "https://via.placeholder.com/64",
  },
  {
    id: 4,
    title: "Gulasch",
    desc: "Ein traditionelles Ragout.",
    upvotes: 24,
    downvotes: 0,
    autor: "Ungarn",
    image: "https://via.placeholder.com/64",
  },
];

Vue.component("entry-component", {
  props: ["entry", "entries"],
  template:
    '<div class="media my-3" > <img :src="entry.image" alt="" class="mr-3" /> <div class="media-body"> <h5> {{entry.title}} ({{votesDifference}}) <span class="float-right text-primary" style="cursor: pointer" @click="upvote(entry.id)" > <i class="fa fa-thumbs-up"></i ><strong>{{entry.upvotes}}</strong> </span>  <span class="float-right text-primary" style="cursor: pointer" @click="downvote(entry.id)" > <i class="fa fa-thumbs-down ml-4"></i ><strong>{{entry.downvotes}}</strong> </span> </h5> <div>{{entry.desc}}</div> <small class="text-muted">{{entry.autor}}</small> </div> </div>',
  computed: {
    votesDifference() {
      return this.entry.upvotes - this.entry.downvotes;
    },
  },
  methods: {
    upvote(entryId) {
      const entry = this.entries.find((entry) => entry.id === entryId);
      entry.upvotes++;
    },
    downvote(entryId) {
      const entry = this.entries.find((entry) => entry.id === entryId);
      entry.downvotes++;
    },
  },
});

new Vue({
  el: "#app",
  data: {
    entries: entries,
  },
  computed: {
    sortedEntries() {
      return this.entries.sort((a, b) => {
        return (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes);
      });
    },
    totalupvotes() {
      return this.entries.reduce((totalupvotes, entry) => {
        return totalupvotes + entry.upvotes;
      }, 0);
    },
  },
});
