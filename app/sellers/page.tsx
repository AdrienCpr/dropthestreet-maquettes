import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Overview } from "./components/overview"
import { RecentSales } from "./components/recent-sales"
import { CalendarDateRangePicker } from "./components/date-range-picker"
import { Button } from "@/components/ui/button"
import { Package, ShoppingCart, TrendingUp, Users } from 'lucide-react'
import { Eye, Gavel, Bell, AlertTriangle, CheckCircle } from 'lucide-react'

export default function DashboardPage() {
    return (
        <>
            <div className="md:hidden">
                <img
                    src="/examples/dashboard-light.png"
                    width={1280}
                    height={866}
                    alt="Dashboard"
                    className="block dark:hidden"
                />
                <img
                    src="/examples/dashboard-dark.png"
                    width={1280}
                    height={866}
                    alt="Dashboard"
                    className="hidden dark:block"
                />
            </div>
            <div className="hidden flex-col md:flex">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                        <div className="flex items-center space-x-2">
                            <CalendarDateRangePicker />
                            <Button>Télécharger</Button>
                        </div>
                    </div>
                    <Tabs defaultValue="overview" className="space-y-4">
                        <TabsList>
                            <TabsTrigger value="overview">Vue d&apos;ensemble</TabsTrigger>
                            <TabsTrigger value="analytics">Analytiques</TabsTrigger>
                            <TabsTrigger value="reports">Rapports</TabsTrigger>
                            <TabsTrigger value="notifications">Notifications</TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview" className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Ventes Totales
                                        </CardTitle>
                                        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">€45,231.89</div>
                                        <p className="text-xs text-muted-foreground">
                                            +20.1% par rapport au mois dernier
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Produits Actifs
                                        </CardTitle>
                                        <Package className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">+573</div>
                                        <p className="text-xs text-muted-foreground">
                                            +201 depuis la dernière heure
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Enchères Actives</CardTitle>
                                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">+12,234</div>
                                        <p className="text-xs text-muted-foreground">
                                            +19% par rapport à la semaine dernière
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Nouveaux Clients
                                        </CardTitle>
                                        <Users className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">+573</div>
                                        <p className="text-xs text-muted-foreground">
                                            +201 depuis le dernier mois
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                                <Card className="col-span-4">
                                    <CardHeader>
                                        <CardTitle>Aperçu</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pl-2">
                                        <Overview />
                                    </CardContent>
                                </Card>
                                <Card className="col-span-3">
                                    <CardHeader>
                                        <CardTitle>Ventes Récentes</CardTitle>
                                        <CardContent>
                                            <RecentSales />
                                        </CardContent>
                                    </CardHeader>
                                </Card>
                            </div>
                        </TabsContent>
                        <TabsContent value="analytics" className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Vues Totales
                                        </CardTitle>
                                        <Eye className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">246,889</div>
                                        <p className="text-xs text-muted-foreground">
                                            +20.1% par rapport au mois dernier
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Enchères Placées
                                        </CardTitle>
                                        <Gavel className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">12,234</div>
                                        <p className="text-xs text-muted-foreground">
                                            +19% par rapport à la semaine dernière
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                        <TabsContent value="reports" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Rapports Disponibles</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-5">
                                        <li>Rapport de ventes mensuel</li>
                                        <li>Analyse des performances des produits</li>
                                        <li>Rapport d&apos;activité des enchères</li>
                                        <li>Rapport de satisfaction client</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="notifications" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Notifications Récentes</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <Bell className="mr-2 h-4 w-4 text-blue-500" />
                                            <span>Nouvelle enchère placée sur Sneakers Edition Limitée</span>
                                        </li>
                                        <li className="flex items-center">
                                            <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
                                            <span>Stock faible pour T-shirt Graphique Urbain</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                                            <span>Vente réussie : Casquette Streetwear Premium</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

