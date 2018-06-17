package weigla.qw.math;

public class GCD {
	// http://introcs.cs.princeton.edu/78crypto/ExtendedEuclid.java.html
	public static long[] gcd(long p, long q) {
		if (q == 0)
			return new long[] { p, 1, 0 };
		long[] vals = gcd(q, p % q);
		long d = vals[0];
		long a = vals[2];
		long b = vals[1] - (p / q) * vals[2];
		return new long[] { d, a, b };
	}
	

	public static long extendedGCDFactorFirst(long m, long n) {
		return gcd(m, n)[1];
	}
}
