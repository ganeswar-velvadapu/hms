import 'package:frontend/screens/home_screen.dart';
import 'package:frontend/screens/login_screen.dart';
import 'package:go_router/go_router.dart';

class AppRouter {
  final GoRouter router = GoRouter(
    initialLocation: '/login',
    routes: [
      GoRoute(
        path: '/',
        builder: (context, state) => HomeScreen(), 
      ),
      GoRoute(
        path: '/login',
        builder: (context, state) => LoginScreen(), 
      ),
    ],
  );
}

