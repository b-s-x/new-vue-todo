<template>
    <div class="modal-fade">
        <div class="modal-backdrop" ref='modal-backdrop'>
            <div class="modal"> 
                <div class="modal-body">
                    <slot> </slot> 

                <div>
                    <button class="accept"
                        @click="accept"
                    > 
                    yes </button>
                    <button class="decline"
                        @click="decline"
                    > no </button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bus } from '../main'
import correct from '@/assets/icons/correct.svg'

export default {
    methods: {
        accept() {
            bus.$emit('accept', id)
        },
        decline() {
            bus.$emit('decline')
        },
    },
    mounted() {
      document.addEventListener('click', (item) => {
          if(item.target === this.$refs['modal-backdrop']) {
              this.decline()
          }
      })
    },
}
</script>

<style scoped>

    .modal-backdrop {
        position: fixed;
        top: 0px;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background: #FFFFFF;
        box-shadow: 1px 1px 10px ;
        overflow-x: auto;
        margin-bottom: 100px;
        width: 300px;
        border-radius: 15px;
    }
 
    .modal-body {
        padding: 20px 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    
   .accept, .decline {
        margin: 3px 5px;
        padding: 5px;
        background: white;
        border: 1px solid black;
        border-radius: 5px;
        outline: none;
        font-size: 15px
    }

</style>
