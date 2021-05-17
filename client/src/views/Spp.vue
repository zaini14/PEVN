<template>
	<div>

	<!-- Dialog Add-->

	<el-dialog
	  title="Add Data"
	  :visible.sync="dialogVisible"
	  width="30%"
	  :before-close="handleClose">
	  <form>
	  	<el-date-picker
	      v-model="inputData.bulan"
	      format="MMMM"
	      value-format="MMMM"
	      type="month"
	      placeholder="Pick a Month">
	    </el-date-picker>
	  	<el-date-picker
	      v-model="inputData.tahun"
	      format="yyyy"
	      value-format="yyyy"
	      type="year"
	      placeholder="Pick a Year">
	    </el-date-picker>
	  	<el-input type="number" placeholder="nominal" v-model="inputData.nominal"></el-input>
	  	<el-select v-model="inputData.userId" placeholder="Select Siswa">
		    <el-option
		      v-for="(item, index) in userData"
		      :key="index"
		      :label="item.name"
		      :value="item.id"
		      >
		    </el-option>
		  </el-select>
	  </form>
	  <span slot="footer" class="dialog-footer">
	    <el-button @click="dialogVisible = false">Cancel</el-button>
	    <el-button type="primary" @click="addData">Confirm</el-button>
	  </span>
	</el-dialog>

	<!-- End Dialog -->

		<!-- Dialog Edit-->

	<el-dialog
	  title="Edit Data"
	  :visible.sync="dialogEdit"
	  width="30%"
	  :before-close="handleClose">
	  <form>
	  	<el-input placeholder="Name" v-model="inputData.bulan"></el-input>
	  	<el-input placeholder="Email" v-model="inputData.tahun"></el-input>
	  	<el-input type="number" placeholder="nominal" v-model="inputData.nominal"></el-input>
	  	<el-select v-model="inputData.siswa.id" placeholder="Select Role">
		    <el-option
		      v-for="(item, index) in userData"
		      :key="index"
		      :label="item.name"
		      :value="item.id">
		    </el-option>
		  </el-select>
	  </form>
	  <span slot="footer" class="dialog-footer">
	    <el-button @click="dialogEdit = false">Cancel</el-button>
	    <el-button type="primary" @click="editData(inputData.id)">Confirm</el-button>
	  </span>
	</el-dialog>

	<!-- End Dialog -->





		<p
		class="title">SPP</p>
		  <el-button 
		  type="primary"
		  class="btn__add"
		  @click="addModal" 
		  round>
		  <i class="el-icon-plus"></i>
			Add</el-button>
		<el-table
	    :data="tableData.filter(data => !search || data.siswa.name.toLowerCase().includes(search.toLowerCase()))"
	    style="width: 100%">
	    <el-table-column
	    type="index"
	      label="No"
	      prop="id">
	    </el-table-column>
	   	<el-table-column
	      label="Nama Siswa"
	      prop="siswa.name">
	    </el-table-column>
	    <el-table-column
	      label="Bulan"
	      prop="bulan">
	    </el-table-column>
	    <el-table-column
	      label="Tahun"
	      prop="tahun">
	    </el-table-column>
	    <el-table-column
	      label="Nominal"
	      prop="nominal">
	    </el-table-column>
	   	<el-table-column
	   	  :formatter="cellValueRenderer"
	      label="Status">
	    </el-table-column>
	    <el-table-column
	      align="right">
	      <template slot="header" slot-scope="scope">
	        <el-input
	          v-model="search"
	          size="mini"
	          placeholder="Type to search"/>
	      </template>
	      <template slot-scope="scope">
	        <el-button
	          size="mini"
	          @click="editModal(scope.$index, scope.row)">Edit</el-button>
	        <el-button
	          size="mini"
	          type="danger"
	          @click="deleteData(scope.$index, scope.row)">Delete</el-button>
	      </template>
	    </el-table-column>
	  </el-table>
	</div>
</template>

<script>
	import axios from 'axios'
export default {

  name: 'Spp',

  data () {
    return {
    	tableData: [],
        search: '',
        dialogVisible: false,
        dialogEdit: false,
        inputData: {
        	id: '',
        	bulan:'',
        	tahun:'',
        	nominal:'',
        	userId:'',
        	isPay:false,
        	siswa: ''

        },
        userData: {}

    }
},
    methods: {
	    handleClose(done) {
	        this.$confirm('Are you sure to close this dialog?')
	          .then(_ => {
	            done();
	          })
	          .catch(_ => {});
	    },

	    addModal() {
	    	this.inputData = {
	    		id: '',
	        	bulan: '',
	        	tahun: '',
	        	nominal: '',
	        	isPay: false,
	        	userId: '',
	        	siswa: ''

	        }
	        axios
	        .get('http://localhost:3000/siswa')
	        .then((res) => {
	        	res => res.json()
	        	this.userData = res.data
	        })
	        .catch((e) => {
	        	this.$notify.error({
			          title: 'Error',
			          message: e
			    });
	        })

	    	this.dialogVisible = true
	    },

	    addData() {
	    	const data = this.inputData
	    	axios
	    	.post('http://localhost:3000/spp', data)
	    	.then((res) => {
	    		res => res.json()
	    		this.tableData.push(data)
	    		this.dialogVisible = false
	    		window.location.reload()
	    		this.$message({
		            type: 'success',
		            message: 'Add completed'
		        })

	    	})
	    	.catch((e) => {
	    		this.$notify.error({
			          title: 'Error',
			          message: e
			    });
	    	})
	    },

	    deleteData(index, row) {
	    	const id = row.id
		    this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
	          confirmButtonText: 'OK',
	          cancelButtonText: 'Cancel',
	          type: 'warning'
	        }).then(() => {
	        	axios
	        	.delete(`http://localhost:3000/spp/${id}`)
	        	.then((res) => {
	        		this.tableData.splice(index, 1)
		        	window.location.reload()
		        	this.$message({
			            type: 'success',
			            message: 'Delete completed'
			          });
	        	})
	        	.catch((e) => {
	        		this.$notify.error({
			          title: 'Error',
			          message: e
			        });
	        	})
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: 'Delete canceled'
	          });          
	        });
	    },

	    editModal(index, row) {
	    	const id = row.id
	    	axios
	    	.get(`http://localhost:3000/spp/${id}`)
	    	.then((res) => {
	    		const data = res.data
	    			axios
			        .get('http://localhost:3000/siswa')
			        .then((res) => {

			        	res => res.json()
			        	this.userData = res.data
			        	this.dialogEdit = true
	    				this.inputData = data
			        })
			        .catch((e) => {
			        	this.$notify.error({
					          title: 'Error',
					          message: e
					    })
			        })

	    		
	    	})
	    	.catch((e) => {
				this.$notify.error({
		          title: 'Error',
		          message: e
		        });
	    	})
	    },
	    editData(id) {
	    	const data = this.inputData
	    	axios
	    	.put(`http://localhost:3000/spp/${id}`, data)
	    	.then((res) => {
	    		res => res.json()
	    		this.dialogEdit = false
	    		window.location.reload()
	    		this.$message({
		            type: 'success',
		            message: 'Edit completed'
		        });
	    	})
	    	.catch((e) => {
	    		this.$notify.error({
		          title: 'Error',
		          message: e
		        });
	    	})
	    },
	    cellValueRenderer(row, column, cellValue, index) {
	        let value = cellValue;
	        if (typeof row[column.property] === 'boolean') {
	            value = String(cellValue);
	        }

	        if (!value) {
	        	value = 'Belum Lunas'
	        } else {
	        	value = 'Lunas'
	        }
	        return value;
	    },

    },
    created() {
   		axios
   			.get('http://localhost:3000/spp')
   			.then((res) => {
   				res => res.json()
   				this.tableData = res.data
   			})
   			.catch((e) => {
		   		this.$notify.error({
		          title: 'Error',
		          message: e
		        })
   			})
   },
}	

</script>

<style lang="css" scoped>
.title {
	font-size: 2.4rem;
}
.btn__add {
	float:right;
	margin-bottom: 1rem;
}
</style>