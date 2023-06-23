import express from 'express'
import Products from '../models/ProductModels.js'

export const getProduct = async (req, res) => {
  try {
    const respons = await Products.findAll()
    res.status(200).json(respons)
  } catch (error) {
    console.log(error.message)
  }
}

export const getProductById = async (req, res) => {
  try {
    const respons = await Products.findOne({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(respons)
  } catch (error) {
    console.log(error.message)
  }
}

export const addProduct = async (req, res) => {
  try {
    await Products.create(req.body)
    res.status(201).json({ msg: 'Berhasil Menambahkan Product' })
  } catch (error) {
    console.log(error.message)
  }
}

export const updateProduct = async (req, res) => {
  try {
    await Products.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({ msg: 'Berhasil Update Product' })
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteProduct = async (req, res) => {
  try {
    await Products.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({ msg: 'Berhasil Menghapus Product' })
  } catch (error) {
    console.log(error.message)
  }
}
