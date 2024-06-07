import React from 'react'
import Navbar from './Navbar'

const Viewall = () => {
  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">TITLE</th>
      <th scope="col">AUTHOR</th>
      <th scope="col">PUBLISHEDYEAR</th>
      <th scope="col">PRICE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">One Hundred Years of Solitude</td>
      <td>Gabriel García Márquez</td>
      <td>1900</td>
      <td>5000</td>
    </tr>
    <tr>
      <td scope="row">Moby-Dick</td>
      <td>Herman Melville
      </td>
      <td>1980</td>
      <td>6000</td>
    </tr>
    <tr>
      <td scope="row">The Great Gatsby</td>
      <td>Leo Tolstoy</td>
      <td>2000</td>
      <td>5000</td>
    </tr>
    <tr>
      <td scope="row">War and Peace</td>
      <td>Leo Tolstoy</td>
      <td>2100</td>
      <td>3000</td>
    </tr>
    <tr>
      <td scope="row">War and Peace</td>
      <td>Leo Tolstoy</td>
      <td>2100</td>
      <td>3000</td>
    </tr>
    <tr>
      <td scope="row">War and Peace</td>
      <td>Leo Tolstoy</td>
      <td>2100</td>
      <td>3000</td>
    </tr>
    <tr>
      <td scope="row">War and Peace</td>
      <td>Leo Tolstoy</td>
      <td>1988</td>
      <td>3000</td>
    </tr>
    <tr>
      <td scope="row">War and Peace</td>
      <td>Leo Tolstoy</td>
      <td>2100</td>
      <td>3000</td>
    </tr>
  </tbody>
</table>

        </div>
    </div>
</div>

    </div>
  )
}

export default Viewall