#include <iostream>
#include <functional>
#include <algorithm>
#include <queue>
#include <stack>
#include <climits>

using namespace std;

template<class VertexType>
class Graph
{
    int numVertices ;               ///Current Number of Vertices
    VertexType vertices[50] ;  ///Max Number of Vertices is 50
    int edegs[50][50] ;              ///Adjacency Matrix
    bool marks[50];

public:
    explicit Graph() {numVertices = 0;}

    void MakeEmpty(){
        numVertices = 0;
        for (int i=0 ; i<50 ; i++)
            for (int j=0 ; j<50 ; j++)
                edegs[i][j] = 0;
        
        for (int i=0 ; i<50 ; i++)
            marks[i] = false ;
        
    };

    bool IsEmpty(){
        return numVertices == 0 ;
    };

    bool IsFull(){
        return numVertices == 50 ;
    };

    void AddVertex (const VertexType& vertex){
        vertices[numVertices] = vertex ;
        for (int i=0 ; i<=numVertices ; i++)
        {
            edegs[numVertices][i] = 0 ;
            edegs[i][numVertices] = 0 ;
        }
        numVertices++;
    };

    void AddEdge(VertexType fromVertex ,VertexType toVertex , int Weight = 1 ){
        int fromIndex = GetIndex (fromVertex);
        int toIndex = GetIndex (toVertex);
        edegs[fromIndex][toIndex] = Weight ;
    };

    int GetPathWeight (VertexType fromVertex ,VertexType toVertex){
        int fromIndex = GetIndex (fromVertex);
        int toIndex = GetIndex (toVertex);
        return edegs[fromIndex][toIndex];
    };

    int GetIndex (const VertexType& vertex){
        for (int i=0 ; i<numVertices ; i++)
        {
            if (vertices[i] == vertex)
                return i ;
        }
        throw runtime_error("Vertex not found");
    };

    void GetAdjVertices (VertexType vertex , queue<VertexType> & VertexQ){
        int vertexIndex = GetIndex (vertex);
        for (int i=0 ; i<numVertices ; i++)
        {
            if (edegs[vertexIndex][i] != 0)
                VertexQ.push(vertices[i]);
        }
    };

    void ClearMarks (){
        for (int i=0 ; i<numVertices ; i++)
            marks[i] = false ;
    };

    void MarkVertex(VertexType vertex){
        int vertexIndex = GetIndex (vertex);
        marks[vertexIndex] = true;
    };

    bool IsMarked (VertexType vertex){
        int vertexIndex = GetIndex (vertex);
        return marks[vertexIndex];
    };

    void DepthFirstSearch (const VertexType& startVertex , const VertexType& endVertex) {
        stack<VertexType> VertexS ;
        VertexS.push(startVertex);

        while (!VertexS.empty())
        {
            VertexType currentVertex = VertexS.top();
            VertexS.pop();

            if (!IsMarked(currentVertex))
            {
                cout << currentVertex << " " ;
                MarkVertex(currentVertex);

                if (currentVertex == endVertex)
                    return ;

                queue<VertexType> AdjVerticesQ ;
                GetAdjVertices(currentVertex , AdjVerticesQ);

                while (!AdjVerticesQ.empty())
                {
                    VertexType AdjVertex = AdjVerticesQ.front();
                    AdjVerticesQ.pop();

                    if (!IsMarked(AdjVertex))
                        VertexS.push(AdjVertex);
                }
            }
        }
    }; 

    void Dijkstra (const VertexType& startVertex){
        priority_queue<pair<int,VertexType> , vector<pair<int,VertexType>> , greater<>> PQ ;

        vector<int> distances (numVertices , INT_MAX);

        int startIndex = GetIndex (startVertex);
        distances[startIndex] = 0 ;

        PQ.push({0 , startVertex});

        while (!PQ.empty())
        {
            auto currentPair = PQ.top();
            PQ.pop();

            VertexType currentVertex = currentPair.second ;
            int currentDistance = currentPair.first ;

            int currentIndex = GetIndex (currentVertex);

            queue<VertexType> AdjVerticesQ ;
            GetAdjVertices(currentVertex , AdjVerticesQ);

            while (!AdjVerticesQ.empty())
            {
                VertexType AdjVertex = AdjVerticesQ.front();
                AdjVerticesQ.pop();

                int AdjIndex = GetIndex (AdjVertex);
                int edgeWeight = edegs[currentIndex][AdjIndex];

                if (distances[AdjIndex] > currentDistance + edgeWeight)
                {
                    distances[AdjIndex] = currentDistance + edgeWeight ;
                    PQ.push({distances[AdjIndex] , AdjVertex});
                }
            }
        }

        // Print distances
        for (int i=0 ; i<numVertices ; i++)
        {
            cout << "Distance from " << startVertex << " to " << vertices[i]
                 << " is " << distances[i] << endl;
        }
    }; /// Pirority Queue , Adjacent Queue

};

int main()
{
    Graph<int> g;

    // Add vertices
    g.AddVertex(0);
    g.AddVertex(1);
    g.AddVertex(2);
    g.AddVertex(3);
    g.AddVertex(4);

    // Add weighted edges (directed)
    g.AddEdge(0, 1, 10);
    g.AddEdge(0, 3, 5);

    g.AddEdge(1, 2, 1);
    g.AddEdge(1, 3, 2);

    g.AddEdge(2, 4, 4);

    g.AddEdge(3, 1, 3);
    g.AddEdge(3, 2, 9);
    g.AddEdge(3, 4, 2);

    g.AddEdge(4, 0, 7);
    g.AddEdge(4, 2, 6);

    // Perform DFS
    // 0 
    // |  \
    // 3 - 1
    // | \ |
    // 4 - 2 

    g.ClearMarks();
    cout << "Depth-First Search from vertex 0 to 2:\n";
    g.DepthFirstSearch(0, 2);

    cout << "Dijkstra starting from vertex 0:\n";
    g.Dijkstra(0);

    return 0;
}
