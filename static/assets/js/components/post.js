export default {
	props: {
		post: {
			type: Object,
			required: true
		},
		loggedInUserId: {}
	},
  methods: {
    onclick: () => this.$parent.lovePost(this.post._id)
  },
  computed: {
    postIdInfo () {
		return new Date(this.post.time).toLocaleDateString("en-US") + " " + new Date(this.post.time).toLocaleTimeString("en-US") + " - " + this.post._id
    }
  },
	template: `
		<div
				class="max-w-2xl flex p-6 mx-auto my-5 bg-white rounded-lg shadow-md"
        :class="{'bg-indigo-100': post.highlight}"
				>
				<div
					class="pt-1"
				>
					<img :src="'/picture/' + post.posterID"
							height="30px"
						  class="rounded-full h-6 inline-block shadow"
					/>
					<h4 class="inline-block text-xl text-gray-900 leading-tight align-middle ml-1">
						@{{ post.poster }}
					</h4>
					<p class="text-base text-gray-600 leading-normal wasteof-break-words">
						{{ post.content }}
					</p>
					<p class="text-base text-gray-500 italic leading-normal">
						{{ postIdInfo }}
					</p>
					<div>
						<span
							@click="onclick"
							tabindex="0"
						  :class="{love: true, 'text-red-600': post.loves.includes(loggedInUserId)}"
							>
							<span :data-post-id="post._id" class="iconify inline-block hover:text-red-400 transition-color duration-200 cursor-pointer" data-icon="uil:heart" data-inline="true"></span>
						</span>
						<span :data-post-count-id="post._id" class="ml-1">
							{{ post.loves.length }}
						</span>
					</div>
				</div>
		</div>
`
}
