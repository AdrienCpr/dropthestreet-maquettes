"use client"

import { useState } from "react"
import { Plus, Edit2, Trash2, Package, Clock, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bar, BarChart, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

export default function SellerDashboard() {
    const [products] = useState([
        { id: 1, name: "Sneakers X", status: "active", price: 150 },
        { id: 2, name: "Hoodie Y", status: "pending", price: 80 },
        { id: 3, name: "T-shirt Z", status: "sold", price: 35 },
    ])

    const [isAddProductOpen, setIsAddProductOpen] = useState(false)

    const getStatusIcon = (status) => {
        switch (status) {
            case "pending":
                return <Clock className="h-4 w-4 text-yellow-500" />
            case "active":
                return <Package className="h-4 w-4 text-green-500" />
            case "sold":
                return <CheckCircle className="h-4 w-4 text-blue-500" />
            default:
                return null
        }
    }

    // Données factices pour les graphiques
    const salesData = [
        { month: "Jan", sales: 20 },
        { month: "Feb", sales: 35 },
        { month: "Mar", sales: 28 },
        { month: "Apr", sales: 45 },
        { month: "May", sales: 50 },
        { month: "Jun", sales: 60 },
    ]

    const productTypeData = [
        { name: "Sneakers", value: 40 },
        { name: "T-shirts", value: 30 },
        { name: "Hoodies", value: 20 },
        { name: "Accessories", value: 10 },
    ]

    const brandData = [
        { name: "Nike", value: 35 },
        { name: "Adidas", value: 25 },
        { name: "Supreme", value: 20 },
        { name: "Off-White", value: 15 },
        { name: "Others", value: 5 },
    ]

    const revenueData = [
        { month: "Jan", revenue: 3000 },
        { month: "Feb", revenue: 5250 },
        { month: "Mar", revenue: 4200 },
        { month: "Apr", revenue: 6750 },
        { month: "May", revenue: 7500 },
        { month: "Jun", revenue: 9000 },
    ]

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Tableau de bord du vendeur</h1>

            <Tabs defaultValue="products" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="products">Vos produits en vente</TabsTrigger>
                    <TabsTrigger value="statistics">Statistiques</TabsTrigger>
                </TabsList>
                <TabsContent value="products">
                    <Card className="mt-6">
                        <CardHeader>
                            <CardTitle>Vos produits en vente</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nom du produit</TableHead>
                                        <TableHead>Statut</TableHead>
                                        <TableHead>Prix</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {products.map((product) => (
                                        <TableRow key={product.id}>
                                            <TableCell>{product.name}</TableCell>
                                            <TableCell className="flex items-center gap-2">
                                                {getStatusIcon(product.status)}
                                                {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                                            </TableCell>
                                            <TableCell>{product.price} €</TableCell>
                                            <TableCell>
                                                <div className="flex gap-2">
                                                    <Button variant="outline" size="icon">
                                                        <Edit2 className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="outline" size="icon">
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    <div className="mt-6">
                        <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
                            <DialogTrigger asChild>
                                <Button>
                                    <Plus className="mr-2 h-4 w-4" /> Ajouter un nouveau produit
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Ajouter un nouveau produit</DialogTitle>
                                    <DialogDescription>
                                        Remplissez les détails de votre nouveau produit ici. Cliquez sur sauvegarder quand vous avez terminé.
                                    </DialogDescription>
                                </DialogHeader>
                                <form className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                            Nom
                                        </Label>
                                        <Input id="name" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="description" className="text-right">
                                            Description
                                        </Label>
                                        <Textarea id="description" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="price" className="text-right">
                                            Prix minimum
                                        </Label>
                                        <Input id="price" type="number" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="category" className="text-right">
                                            Catégorie
                                        </Label>
                                        <Select>
                                            <SelectTrigger className="col-span-3">
                                                <SelectValue placeholder="Sélectionnez une catégorie" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="sneakers">Sneakers</SelectItem>
                                                <SelectItem value="tshirts">T-shirts</SelectItem>
                                                <SelectItem value="hoodies">Hoodies</SelectItem>
                                                <SelectItem value="accessories">Accessoires</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label className="text-right">Format</Label>
                                        <RadioGroup defaultValue="drop" className="col-span-3">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="drop" id="drop" />
                                                <Label htmlFor="drop">Drop</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="auction" id="auction" />
                                                <Label htmlFor="auction">Enchère</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="photos" className="text-right">
                                            Photos
                                        </Label>
                                        <Input id="photos" type="file" multiple className="col-span-3" />
                                    </div>
                                </form>
                                <div className="flex justify-end">
                                    <Button type="submit">Sauvegarder</Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </TabsContent>
                <TabsContent value="statistics">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Quantité des articles vendus</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={{
                                    sales: {
                                        label: "Ventes",
                                        color: "hsl(var(--chart-1))",
                                    },
                                }} className="h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={salesData}>
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip content={<ChartTooltipContent />} />
                                            <Bar dataKey="sales" fill="var(--color-sales)" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </ChartContainer>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Types des articles vendus</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={{
                                    value: {
                                        label: "Quantité",
                                        color: "hsl(var(--chart-2))",
                                    },
                                }} className="h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={productTypeData}
                                                dataKey="value"
                                                nameKey="name"
                                                cx="50%"
                                                cy="50%"
                                                outerRadius={80}
                                                fill="var(--color-value)"
                                                label
                                            />
                                            <Tooltip content={<ChartTooltipContent />} />
                                            <Legend />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </ChartContainer>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Marques des articles vendus</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={{
                                    value: {
                                        label: "Quantité",
                                        color: "hsl(var(--chart-3))",
                                    },
                                }} className="h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={brandData}
                                                dataKey="value"
                                                nameKey="name"
                                                cx="50%"
                                                cy="50%"
                                                outerRadius={80}
                                                fill="var(--color-value)"
                                                label
                                            />
                                            <Tooltip content={<ChartTooltipContent />} />
                                            <Legend />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </ChartContainer>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Revenus</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={{
                                    revenue: {
                                        label: "Revenus",
                                        color: "hsl(var(--chart-4))",
                                    },
                                }} className="h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={revenueData}>
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip content={<ChartTooltipContent />} />
                                            <Line type="monotone" dataKey="revenue" stroke="var(--color-revenue)" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

