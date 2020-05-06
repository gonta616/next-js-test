import Layout from '../../components/layout'
import Head from 'next/head'

export default function Form() {
  return (
    <Layout>
      <form action="/api/hello" method="POST" role="form">
        <legend>Form title</legend>
      
        <div class="form-group">
          <label for="">label</label>
          <input type="text" class="form-control" id="" placeholder="Input field"></input>
        </div>
      
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </Layout>
  )
}